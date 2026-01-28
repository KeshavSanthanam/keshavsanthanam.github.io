# Keshav Santhanam - Personal Website

Personal website documenting my journey into Entrepreneurship Through Acquisition (ETA).

## About

This site showcases my transition from software engineering to pursuing business ownership through acquisition. It includes writings and notes about ETA fundamentals, search strategy, deal analysis, and operational topics.

## Technology Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Blog System**: Markdown files in `_posts/` folder
- **Build**: Node.js script (`build.js`) generates post metadata
- **Hosting**: GitHub Pages

## Local Development

1. Clone the repository
2. Open `index.html` in your browser
3. For blog posts, you'll need a local server (e.g., `python -m http.server`)

## Adding New Posts

1. Create a new Markdown file in `_posts/` folder
2. Use filename format: `YYYY-MM-DD-post-title.md`
3. Add frontmatter:
   ```yaml
   ---
   layout: post
   title: Your Post Title
   tags: [category-name]
   author: Keshav Santhanam
   ---
   ```
4. Write your content in Markdown
5. Run `node build.js` to regenerate post metadata
6. Commit and push changes

## Blog Categories

- **eta-fundamentals**: Core concepts (SDE vs EBITDA, financial modeling)
- **search-strategy**: Deal sourcing, industry selection, search fund vs self-funded
- **due-diligence**: QofE, financial analysis, checklists
- **deal-structure**: Working capital, deal terms, financing
- **operations**: Management transition, value creation
- **deal-sourcing**: Seller psychology, outreach strategies

## Deployment

This site is designed for GitHub Pages:
1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Set source to main branch
4. Optionally add custom domain via CNAME file

## License

Content is personal writing. Code structure is open for reuse.
