# Deployment Notes

## Fixes Applied

### 1. GitHub Actions Permission Error
**Problem:** GitHub Actions bot didn't have permission to push to the repository.

**Solution:** Added `permissions: contents: write` to the workflow file.

### 2. Blog Posts Not Loading on GitHub Pages
**Problem:** Blog posts showed "Sorry, the requested post could not be found" on the deployed site.

**Solution:** The `_posts/` folder needs to be deployed to GitHub Pages so the markdown files are accessible. Updated the `exclude_assets` in the workflow to NOT exclude `_posts/`.

## What Gets Deployed

**Included in deployment:**
- `index.html`, `post.html` (main pages)
- `styles.css`, `post-styles.css` (styling)
- `script.js`, `post.js` (JavaScript)
- `data/` folder (posts.js, projects.js)
- `_posts/` folder (markdown blog posts)

**Excluded from deployment:**
- `.github/` (workflow files)
- `old_site_content/` (old site backup)
- `build.js`, `build.py`, `preview.js` (build scripts)
- `README.md`, `SITE_README.md`, `QUICKSTART.md` (documentation)
- `.gitignore`

## Next Steps

1. **Push these changes** to GitHub
2. **Wait for GitHub Actions** to complete the build
3. **Check your site** at `https://keshavsanthanam.github.io/`
4. **Verify blog posts** work by clicking on any post

## If It Still Doesn't Work

If you still see the 403 error, you may need to:
1. Go to your GitHub repository settings
2. Navigate to Settings > Actions > General
3. Under "Workflow permissions", select "Read and write permissions"
4. Click Save
5. Re-run the failed workflow

## Testing Locally

Always test before deploying:
```bash
node build.js    # Build the site
node preview.js  # Preview at http://localhost:8000
```

Click through blog posts to ensure they load correctly.
