window.addEventListener('load', () => {
    loadNavbar();
    loadFooter();
    renderMarkdown();
});

function loadNavbar() {
    const navbarContainer = document.querySelector('#navbar-container');
    fetch('static/navbar.html')
        .then(response => response.text())
        .then(navbarHtml => navbarContainer.innerHTML += navbarHtml);
}

function loadFooter() {
    const footerContainer = document.querySelector('#footer-container');
    fetch('static/footer.html')
        .then(response => response.text())
        .then(footerHtml => footerContainer.innerHTML += footerHtml);
}

function renderMarkdown() {
    const textContainer = document.querySelector('.container .main-text');
    fetch('./index.md')
        .then(response => response.text())
        .then(text => {
            let showdown = require('showdown'),
                converter = new showdown.Converter(),
                html = converter.makeHtml(text),
                textElements = htmlToElements(html);
            textElements.forEach(element => textContainer.appendChild(element));
        });

    function htmlToElements(html) {
        let template = document.createElement('template');
        template.innerHTML = html.trim();
        return template.content.childNodes;
    }
}
