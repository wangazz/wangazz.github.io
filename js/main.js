window.addEventListener('load', () => {
    loadNavbar();
    loadFooter();
    renderMarkdown();
});

async function loadNavbar() {
    const navbarContainer = document.querySelector('#navbar-container');
    await fetch('/static/navbar.html')
        .then(response => response.text())
        .then(navbarHtml => navbarContainer.innerHTML += navbarHtml);

    const currentPage = getCurrentPage();
    const linkToCurrentPage = $(`li :contains(${currentPage})`);
    linkToCurrentPage.addClass('active');

    function getCurrentPage() {
        const title = document.title;
        return title.match(/(.*) - \w+/)[1].trim();
    }
}

function loadFooter() {
    const footerContainer = document.querySelector('#footer-container');
    fetch('/static/footer.html')
        .then(response => response.text())
        .then(footerHtml => footerContainer.innerHTML += footerHtml);
}

function renderMarkdown() {
    const fileName = location.pathname.match(/.*\/(.+).html/)[1];
    const textContainer = document.querySelector('#main-text-container');
    fetch(`./${fileName}.md`)
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
