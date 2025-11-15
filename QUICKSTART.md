# Quick Start Guide

## Your new site is ready! Here's what I built:

### ✨ Features
- **One-page design** with bio, projects, and blog posts
- **Soft earth tones theme** (warm, comforting colors)
- **Tag-based categorization** - posts automatically grouped by their tags
- **Fully static** - perfect for GitHub Pages
- **Responsive design** - works on mobile and desktop

### 📁 What's included
Currently showing **59 blog posts** across **4 categories**:
- **algorithms**: 56 posts
- **productivity**: 1 post
- **meta**: 1 post
- **math**: 1 post

### 🚀 Next Steps

#### 1. Update your projects
Edit `data/projects.js` to add your actual projects (up to 5 recommended)

#### 2. Update your email
Edit `index.html` line 23 to add your real email address

#### 3. Preview locally
```bash
node preview.js
```
Then open http://localhost:8000 in your browser

#### 4. Deploy to GitHub Pages

**Option A: Using GitHub Actions (Recommended)**
1. Create a new repository on GitHub
2. Push this code to the repository
3. Go to Settings > Pages
4. Set source to "GitHub Actions"
5. The `.github/workflows/build.yml` file will automatically build and deploy on push

**Option B: Manual deployment**
1. Run `node build.js` to generate posts data
2. Push all files to your repository
3. Enable GitHub Pages in Settings > Pages
4. Set source to the main branch

#### 5. Add your custom domain (optional)
Once deployed to GitHub Pages:
1. Go to Settings > Pages
2. Add your custom domain
3. Update your DNS settings as instructed by GitHub

### 📝 Adding new blog posts

1. Add markdown file to `_posts/` with format: `YYYY-MM-DD-title.md`
2. Include YAML frontmatter with exactly ONE tag:
```yaml
---
title: Your Post Title
tags: [category-name]
---
```
3. Run `node build.js` to regenerate the site
4. If you add a post with a NEW tag, it will automatically create a new category!

### 🎨 Customizing colors

Edit the CSS variables in `styles.css` (lines 2-12) to change colors:
```css
:root {
    --bg-primary: #f5f1e8;      /* Background */
    --text-primary: #3d3630;    /* Text */
    --accent-primary: #a8896c;  /* Accents */
    /* ... etc */
}
```

### 📊 Current site structure
```
Your Site
├── Home page (index.html)
│   ├── Bio section
│   ├── Recent Projects (5 max)
│   └── Blog Posts (grouped by tags)
│       ├── algorithms (56 posts)
│       ├── productivity (1 post)
│       ├── meta (1 post)
│       └── math (1 post)
└── Blog post viewer (post.html)
    └── Renders individual markdown posts
```

### 🛠️ Useful commands
```bash
node build.js      # Rebuild site data
node preview.js    # Preview locally at http://localhost:8000
```

---

See `SITE_README.md` for full documentation.
