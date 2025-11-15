#!/usr/bin/env python3
"""
Static site generator for personal site.
Parses markdown blog posts, extracts metadata and tags,
and generates JavaScript data files for the site.
"""

import os
import re
import json
from datetime import datetime
from pathlib import Path

# Configuration
POSTS_DIR = Path('_posts')
OUTPUT_DIR = Path('data')
POSTS_OUTPUT_FILE = OUTPUT_DIR / 'posts.js'
MAX_RECENT_POSTS = 10

def extract_frontmatter(content):
    """Extract YAML frontmatter from markdown content."""
    frontmatter_pattern = r'^---\s*\n(.*?)\n---\s*\n'
    match = re.match(frontmatter_pattern, content, re.DOTALL)

    if not match:
        return {}, content

    frontmatter_text = match.group(1)
    body = content[match.end():]

    # Parse frontmatter
    frontmatter = {}
    for line in frontmatter_text.split('\n'):
        if ':' in line:
            key, value = line.split(':', 1)
            key = key.strip()
            value = value.strip()

            # Handle tags specially (can be [tag] or just tag)
            if key == 'tags':
                # Remove brackets and quotes
                value = value.strip('[]').strip()
                # Split by comma if multiple tags exist
                tags = [t.strip().strip('"').strip("'") for t in value.split(',')]
                frontmatter[key] = tags
            else:
                # Remove quotes if present
                value = value.strip('"').strip("'")
                frontmatter[key] = value

    return frontmatter, body

def parse_date_from_filename(filename):
    """Extract date from Jekyll-style filename (YYYY-MM-DD-title.md)."""
    match = re.match(r'^(\d{4})-(\d{2})-(\d{2})-', filename)
    if match:
        year, month, day = match.groups()
        return f"{year}-{month}-{day}"
    return None

def parse_posts():
    """Parse all blog posts and extract metadata."""
    posts = []

    if not POSTS_DIR.exists():
        print(f"Warning: Posts directory not found: {POSTS_DIR}")
        return posts

    for filepath in POSTS_DIR.glob('*.md'):
        # Skip template and non-post files
        if filepath.name in ['template.md', 'algorithm_post_ideas.md']:
            continue

        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        frontmatter, body = extract_frontmatter(content)

        # Extract title
        title = frontmatter.get('title', filepath.stem)

        # Extract date from filename
        date_str = parse_date_from_filename(filepath.name)
        if not date_str:
            print(f"Warning: Could not parse date from {filepath.name}")
            continue

        # Extract tags (should be exactly 1)
        tags = frontmatter.get('tags', [])
        if not tags:
            print(f"Warning: No tags found in {filepath.name}")
            continue

        tag = tags[0] if isinstance(tags, list) else tags

        # Create post data
        post = {
            'title': title,
            'date': date_str,
            'tag': tag,
            'filename': filepath.name,
            'url': f'post.html?post={filepath.stem}'
        }

        posts.append(post)

    # Sort posts by date (newest first)
    posts.sort(key=lambda p: p['date'], reverse=True)

    return posts

def group_posts_by_tag(posts, max_posts=10):
    """Group posts by tag and limit to most recent."""
    # Take only the most recent posts
    recent_posts = posts[:max_posts]

    # Group by tag
    grouped = {}
    for post in recent_posts:
        tag = post['tag']
        if tag not in grouped:
            grouped[tag] = []
        grouped[tag].append(post)

    return grouped

def generate_posts_js(posts):
    """Generate JavaScript file with posts data."""
    grouped_posts = group_posts_by_tag(posts, MAX_RECENT_POSTS)

    # Convert to JavaScript format
    js_content = f"""// Auto-generated posts data
// Last updated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

const postsData = {json.dumps(grouped_posts, indent=2)};

const allPosts = {json.dumps(posts, indent=2)};
"""

    OUTPUT_DIR.mkdir(exist_ok=True)
    with open(POSTS_OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(js_content)

    print(f"Generated {POSTS_OUTPUT_FILE} with {len(posts)} posts in {len(grouped_posts)} categories")
    for tag, tag_posts in grouped_posts.items():
        print(f"  - {tag}: {len(tag_posts)} posts")

def main():
    """Main build function."""
    print("Building static site...")

    # Parse posts
    posts = parse_posts()
    print(f"Found {len(posts)} blog posts")

    # Generate posts data
    generate_posts_js(posts)

    print("Build complete!")

if __name__ == '__main__':
    main()
