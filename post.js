// Get post slug from URL
function getPostSlug() {
    const params = new URLSearchParams(window.location.search);
    return params.get('post');
}

// Parse frontmatter from markdown
function parseFrontmatter(content) {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = content.match(frontmatterRegex);

    if (!match) {
        return { metadata: {}, content: content };
    }

    const frontmatterText = match[1];
    const markdownContent = match[2];

    const metadata = {};
    const lines = frontmatterText.split('\n');

    lines.forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > -1) {
            const key = line.substring(0, colonIndex).trim();
            let value = line.substring(colonIndex + 1).trim();

            // Handle arrays (tags)
            if (value.startsWith('[') && value.endsWith(']')) {
                value = value.slice(1, -1).split(',').map(v => v.trim().replace(/['"]/g, ''));
            } else {
                // Remove quotes
                value = value.replace(/^['"]|['"]$/g, '');
            }

            metadata[key] = value;
        }
    });

    return { metadata, content: markdownContent };
}

// Load and render post
async function loadPost() {
    const slug = getPostSlug();

    if (!slug) {
        document.getElementById('post-title').textContent = 'Post Not Found';
        document.getElementById('post-content').innerHTML = '<p>No post specified.</p>';
        return;
    }

    try {
        const response = await fetch(`_posts/${slug}.md`);

        if (!response.ok) {
            throw new Error('Post not found');
        }

        const markdown = await response.text();
        const { metadata, content } = parseFrontmatter(markdown);

        // Set title
        document.getElementById('post-title').textContent = metadata.title || 'Untitled Post';
        document.title = `${metadata.title || 'Post'} - Keshav Santhanam`;

        // Set metadata
        const dateMatch = slug.match(/^(\d{4}-\d{2}-\d{2})/);
        if (dateMatch) {
            document.getElementById('post-date').textContent = formatDate(dateMatch[1]);
        }

        document.getElementById('post-author').textContent = metadata.author || 'Keshav Santhanam';

        // Render markdown content
        document.getElementById('post-content').innerHTML = marked.parse(content);

    } catch (error) {
        console.error('Error loading post:', error);
        document.getElementById('post-title').textContent = 'Post Not Found';
        document.getElementById('post-content').innerHTML = '<p>The requested post could not be found.</p>';
    }
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Load post on page load
document.addEventListener('DOMContentLoaded', loadPost);
