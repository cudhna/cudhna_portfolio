// Track the scroll position and highlight the active section
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      navLinks.forEach(link => link.classList.remove('active'));
      navLinks[index].classList.add('active');
    }
  });
});

const express = require('express');
const app = express();
const path = require('path');

app.get('/assets/cv.pdf', function(req, res) {
    res.setHeader('Content-Disposition', 'attachment; filename=cv.pdf');
    res.sendFile(path.join(__dirname, 'assets', 'cv.pdf'));
});

app.listen(3000, () => console.log('Server running on port 3000'));

