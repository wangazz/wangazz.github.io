window.addEventListener('load', () => {
    let showdown = require('showdown'),
        converter = new showdown.Converter(),
        text = '#Hello World',
        html = converter.makeHtml(text),
        textElement = htmlToElement(html);

    const mainText = document.querySelector('.main-text');
    mainText.appendChild(textElement);

    function htmlToElement(html) {
        html = html.trim();
        let template = document.createElement('template');
        template.innerHTML = html;
        return template.content.firstChild;
    }
});
