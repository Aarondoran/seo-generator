const footerHTML = `
<footer class="footer">
  <span>&copy; ${new Date().getFullYear()} Aarondoran</span>
  <span>
    <a href="index.html">Home</a> | 
    <a href="generate.html">Generator</a>
    <a href="https://github.com/Aarondoran/SEO-Generator">Github</a>
    <a href="https://aarondoran.me">My Website</a>
  </span>
</footer>
`;

document.body.insertAdjacentHTML("beforeend", footerHTML);
