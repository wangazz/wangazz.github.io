# wangazz.github.io

This is my personal website and blog. In addition to posting content I find interesting, this website will be a journal of building a modern, responsive website from scratch.

I had several design considerations in building this website:

- The layout should be clean, modern, and responsive
    - This is achieved by making the most of the functionality of HTML5, CSS3, and ES6+ wherever possible
- All rendering should be done client-side to minimise infrastructure requirements
    - This is achieved by using Browserify to bundle all Node dependencies into client-side JavaScript
- I should be able to easily create and modify content to upload to the website
    - This is achieved by using a custom template and script utilising Showdown to render Markdown files as HTML
