window.addEventListener('load', () => {
    loadBlog();
});

function loadBlog() {
    const blogContainer = document.querySelector('#blog-container');
    fetch('/static/templates/blog.html')
            .then(response => response.text())
            .then(blogHtml => blogContainer.innerHTML += blogHtml);
}
