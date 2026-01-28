// Render projects
function renderProjects() {
    const projectsList = document.getElementById('projects-list');

    if (!projectsData || projectsData.length === 0) {
        projectsList.innerHTML = '<p>No resources yet.</p>';
        return;
    }

    projectsList.innerHTML = projectsData.map(project => `
        <div class="project-item">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            ${project.url ? `<a href="${project.url}" target="_blank">View →</a>` : ''}
        </div>
    `).join('');
}

// Render blog posts grouped by category
function renderBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');

    if (!postsData || Object.keys(postsData).length === 0) {
        blogPostsContainer.innerHTML = '<p>No posts yet.</p>';
        return;
    }

    const categoriesHTML = Object.entries(postsData).map(([category, posts]) => {
        const postsHTML = posts.slice(0, 100).map(post => `
            <li class="post-item">
                <h4><a href="post.html?post=${post.slug}">${post.title}</a></h4>
                <div class="post-date">${formatDate(post.date)}</div>
            </li>
        `).join('');

        return `
            <div class="category-section">
                <h3>${formatTagForDisplay(category)}</h3>
                <ul class="post-list">
                    ${postsHTML}
                </ul>
            </div>
        `;
    }).join('');

    blogPostsContainer.innerHTML = categoriesHTML;
}

// Format date to readable string
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Format tag for display
function formatTagForDisplay(tag) {
    return tag
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderBlogPosts();
});
