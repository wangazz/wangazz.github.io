// watchify main.js -o bundle.js -v

window.addEventListener('load', () => {
    fetch('../layout/index.md')
        .then(response => response.text())
        .then(text => {
            let showdown = require('showdown'),
                converter = new showdown.Converter(),
                html = converter.makeHtml(text),
                textElements = htmlToElements(html);

            const textContainer = document.querySelector('.main-text');
            textElements.forEach(element => textContainer.appendChild(element));
        });
});

function htmlToElements(html) {
    let template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.childNodes;
}
