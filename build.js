#!/usr/bin/env node
/**
 * Static site generator for personal site.
 * Parses markdown blog posts, extracts metadata and tags,
 * and generates JavaScript data files for the site.
 */

const fs = require('fs');
const path = require('path');

// Configuration
const POSTS_DIR = path.join(__dirname, '_posts');
const OUTPUT_DIR = path.join(__dirname, 'data');
const POSTS_OUTPUT_FILE = path.join(OUTPUT_DIR, 'posts.js');
const MAX_RECENT_POSTS = 100; // Show all posts

/**
 * Extract YAML frontmatter from markdown content
 */
function extractFrontmatter(content) {
    const frontmatterPattern = /^---\s*\n([\s\S]*?)\n---\s*\n/;
    const match = content.match(frontmatterPattern);

    if (!match) {
        return [null, content];
    }

    const frontmatterText = match[1];
    const body = content.substring(match[0].length);

    // Parse frontmatter
    const frontmatter = {};
    frontmatterText.split('\n').forEach(line => {
        if (line.includes(':')) {
            const colonIndex = line.indexOf(':');
            const key = line.substring(0, colonIndex).trim();
            let value = line.substring(colonIndex + 1).trim();

            // Handle tags specially
            if (key === 'tags') {
                value = value.replace(/^\[|\]$/g, '').trim();
                const tags = value.split(',').map(t => t.trim().replace(/^["']|["']$/g, ''));
                frontmatter[key] = tags;
            } else {
                value = value.replace(/^["']|["']$/g, '');
                frontmatter[key] = value;
            }
        }
    });

    return [frontmatter, body];
}

/**
 * Extract date from Jekyll-style filename (YYYY-MM-DD-title.md)
 */
function parseDateFromFilename(filename) {
    const match = filename.match(/^(\d{4})-(\d{2})-(\d{2})-/);
    if (match) {
        const [, year, month, day] = match;
        return `${year}-${month}-${day}`;
    }
    return null;
}

/**
 * Parse all blog posts and extract metadata
 */
function parsePosts() {
    const posts = [];

    if (!fs.existsSync(POSTS_DIR)) {
        console.warn(`Warning: Posts directory not found: ${POSTS_DIR}`);
        return posts;
    }

    const files = fs.readdirSync(POSTS_DIR);

    files.forEach(filename => {
        // Skip non-markdown files and templates
        if (!filename.endsWith('.md') ||
            filename === 'template.md' ||
            filename === 'algorithm_post_ideas.md') {
            return;
        }

        const filepath = path.join(POSTS_DIR, filename);
        const content = fs.readFileSync(filepath, 'utf-8');

        const [frontmatter, body] = extractFrontmatter(content);

        if (!frontmatter) {
            console.warn(`Warning: No frontmatter in ${filename}`);
            return;
        }

        // Extract title
        const title = frontmatter.title || path.basename(filename, '.md');

        // Extract date from filename
        const dateStr = parseDateFromFilename(filename);
        if (!dateStr) {
            console.warn(`Warning: Could not parse date from ${filename}`);
            return;
        }

        // Extract tags (should be exactly 1)
        const tags = frontmatter.tags || [];
        if (tags.length === 0) {
            console.warn(`Warning: No tags found in ${filename}`);
            return;
        }

        const tag = Array.isArray(tags) ? tags[0] : tags;

        // Create post data
        const post = {
            title: title,
            date: dateStr,
            tag: tag,
            filename: filename,
            url: `post.html?post=${path.basename(filename, '.md')}`
        };

        posts.push(post);
    });

    // Sort posts by date (newest first)
    posts.sort((a, b) => b.date.localeCompare(a.date));

    return posts;
}

/**
 * Group posts by tag and limit to most recent
 */
function groupPostsByTag(posts, maxPosts = 10) {
    // Take only the most recent posts
    const recentPosts = posts.slice(0, maxPosts);

    // Group by tag
    const grouped = {};
    recentPosts.forEach(post => {
        const tag = post.tag;
        if (!grouped[tag]) {
            grouped[tag] = [];
        }
        grouped[tag].push(post);
    });

    return grouped;
}

/**
 * Generate JavaScript file with posts data
 */
function generatePostsJS(posts) {
    const groupedPosts = groupPostsByTag(posts, MAX_RECENT_POSTS);

    // Convert to JavaScript format
    const jsContent = `// Auto-generated posts data
// Last updated: ${new Date().toISOString()}

const postsData = ${JSON.stringify(groupedPosts, null, 2)};

const allPosts = ${JSON.stringify(posts, null, 2)};
`;

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    fs.writeFileSync(POSTS_OUTPUT_FILE, jsContent, 'utf-8');

    console.log(`Generated ${POSTS_OUTPUT_FILE} with ${posts.length} posts in ${Object.keys(groupedPosts).length} categories`);
    Object.entries(groupedPosts).forEach(([tag, tagPosts]) => {
        console.log(`  - ${tag}: ${tagPosts.length} posts`);
    });
}

/**
 * Main build function
 */
function main() {
    console.log('Building static site...');

    // Parse posts
    const posts = parsePosts();
    console.log(`Found ${posts.length} blog posts`);

    // Generate posts data
    generatePostsJS(posts);

    console.log('Build complete!');
}

// Run if called directly
if (require.main === module) {
    main();
}

module.exports = { parsePosts, groupPostsByTag, generatePostsJS };
