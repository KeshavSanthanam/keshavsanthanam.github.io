// Main script for homepage

// Render projects
function renderProjects() {
    const projectsList = document.getElementById('projects-list');

    if (!projectsData || projectsData.length === 0) {
        projectsList.innerHTML = '<p style="color: var(--text-secondary);">No projects to display yet.</p>';
        return;
    }

    projectsList.innerHTML = projectsData.map(project => `
        <div class="project-item">
            <h3><a href="${project.url}" target="_blank">${project.name}</a></h3>
            <p>${project.description}</p>
        </div>
    `).join('');
}

// Render blog posts grouped by category
function renderBlogPosts() {
    const blogCategories = document.getElementById('blog-categories');

    if (!postsData || Object.keys(postsData).length === 0) {
        blogCategories.innerHTML = '<p style="color: var(--text-secondary);">No blog posts to display yet.</p>';
        return;
    }

    // Sort categories in reverse alphabetical order
    const sortedTags = Object.keys(postsData).sort().reverse();

    blogCategories.innerHTML = sortedTags.map(tag => {
        const posts = postsData[tag];

        return `
            <div class="category">
                <h3 class="category-title">${tag}</h3>
                <ul class="post-list">
                    ${posts.map(post => `
                        <li class="post-item">
                            <a href="${post.url}" class="post-link">
                                <span class="post-title">${post.title}</span>
                                <span class="post-date">${formatDate(post.date)}</span>
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }).join('');
}

// Format date to readable format
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderBlogPosts();
});
