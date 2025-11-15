// Script for blog post viewer

// Get post slug from URL
function getPostSlug() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('post');
}

// Fetch and render markdown post
async function loadPost() {
    const postSlug = getPostSlug();

    if (!postSlug) {
        document.getElementById('post-content').innerHTML = '<p>Post not found.</p>';
        return;
    }

    try {
        // Fetch the markdown file
        const response = await fetch(`_posts/${postSlug}.md`);

        if (!response.ok) {
            throw new Error('Post not found');
        }

        const markdown = await response.text();

        // Parse frontmatter and content
        const { frontmatter, content } = parseFrontmatter(markdown);

        // Update page title
        if (frontmatter.title) {
            document.getElementById('post-title').textContent = `${frontmatter.title} - Keshav Santhanam`;
        }

        // Render post
        renderPost(frontmatter, content);

    } catch (error) {
        console.error('Error loading post:', error);
        document.getElementById('post-content').innerHTML = `
            <h1>Post Not Found</h1>
            <p>Sorry, the requested post could not be found.</p>
            <p><a href="index.html">Return to home</a></p>
        `;
    }
}

// Parse YAML frontmatter
function parseFrontmatter(markdown) {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = markdown.match(frontmatterRegex);

    if (!match) {
        return { frontmatter: {}, content: markdown };
    }

    const frontmatterText = match[1];
    const content = match[2];

    const frontmatter = {};
    frontmatterText.split('\n').forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > -1) {
            const key = line.substring(0, colonIndex).trim();
            let value = line.substring(colonIndex + 1).trim();

            // Remove quotes and brackets
            value = value.replace(/^["'\[]/, '').replace(/["'\]]$/, '');

            frontmatter[key] = value;
        }
    });

    return { frontmatter, content };
}

// Render post with frontmatter and content
function renderPost(frontmatter, content) {
    const postContent = document.getElementById('post-content');

    // Build post metadata
    let metaHtml = '';
    if (frontmatter.date || frontmatter.tags) {
        metaHtml = '<div class="post-meta">';
        if (frontmatter.date) {
            metaHtml += `<span>Published: ${formatDate(frontmatter.date)}</span>`;
        }
        if (frontmatter.tags) {
            metaHtml += `<span class="tag">${frontmatter.tags}</span>`;
        }
        metaHtml += '</div>';
    }

    // Convert markdown to HTML using marked.js
    const contentHtml = marked.parse(content);

    // Render
    postContent.innerHTML = `
        ${frontmatter.title ? `<h1>${frontmatter.title}</h1>` : ''}
        ${metaHtml}
        <div class="post-body">${contentHtml}</div>
    `;
}

// Format date
function formatDate(dateStr) {
    // Try to parse the date
    const date = new Date(dateStr);
    if (isNaN(date)) {
        return dateStr; // Return original if parsing fails
    }

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Initialize
document.addEventListener('DOMContentLoaded', loadPost);
