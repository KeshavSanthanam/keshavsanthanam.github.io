# Personal Website

A simple, clean personal website built with vanilla HTML, CSS, and JavaScript. Features a soft earth tones theme and displays blog posts organized by tags.

## Features

- **One-page design**: Bio, recent projects, and blog posts all on the homepage
- **Tag-based blog categorization**: Blog posts are automatically grouped by tags
- **Static site**: Fully static, can be hosted on GitHub Pages
- **Responsive**: Works on mobile and desktop
- **Markdown blog posts**: Write posts in markdown with YAML frontmatter

## Setup

### 1. Add Your Blog Posts

Place your markdown blog posts in `_posts/` with the Jekyll naming convention:
```
YYYY-MM-DD-post-title.md
```

Each post should have YAML frontmatter with a single tag:
```yaml
---
layout: post
title: Your Post Title
tags: [category-name]
author: Your Name
---

Your content here...
```

**Important**: Each post should have exactly ONE tag. This tag determines which category it appears under on the homepage.

### 2. Add Your Projects

Edit `data/projects.js` to add up to 5 recent projects with names, descriptions, and links.

### 3. Update Your Bio

Edit `index.html` to update the bio section with your information, links, and contact details.

### 4. Build the Site

Run the build script to generate the posts data:

```bash
node build.js
```

This will parse all markdown posts and generate `data/posts.js` with the 10 most recent posts grouped by tag.

### 5. Preview Locally

Open `index.html` in your browser to preview the site locally. You may need to run a local server to avoid CORS issues:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

Then visit `http://localhost:8000`

### 6. Deploy to GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Set source to "GitHub Actions"
4. The site will automatically build and deploy on every push to main

Alternatively, you can manually deploy by running the build script and pushing the generated files.

## File Structure

```
.
├── index.html              # Homepage
├── post.html              # Blog post viewer
├── styles.css             # Main styles
├── post-styles.css        # Blog post styles
├── script.js              # Homepage JavaScript
├── post.js                # Blog post viewer JavaScript
├── build.js               # Build script (Node.js)
├── data/
│   ├── posts.js          # Generated posts data
│   └── projects.js       # Projects data (edit manually)
├── _posts/               # Your markdown blog posts
└── .github/
    └── workflows/
        └── build.yml     # GitHub Actions workflow
```

## Customization

### Colors

Edit the CSS variables in `styles.css` to change the color scheme:

```css
:root {
    --bg-primary: #f5f1e8;
    --text-primary: #3d3630;
    --accent-primary: #a8896c;
    /* etc. */
}
```

### Number of Posts

Edit `MAX_RECENT_POSTS` in `build.js` to change how many recent posts appear on the homepage (default: 10).

### Projects

Edit `data/projects.js` to add/update your projects (max 5 recommended).

## Adding New Posts

1. Create a new markdown file in `_posts/` with the naming convention `YYYY-MM-DD-title.md`
2. Add YAML frontmatter with a title and tag
3. Write your content in markdown
4. Run `node build.js` to regenerate the posts data
5. Refresh your browser to see the new post

If you add a post with a new tag, it will automatically create a new category on the homepage!

## License

Feel free to use this template for your own site.
