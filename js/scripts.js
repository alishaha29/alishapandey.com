<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Alisha Pandey - Personal Website</title>
<style>
/* CSS styles here */
</style>
</head>
<body>

<div class="container">

  <header class="header">
    <h1>Alisha Pandey</h1>
    <p>Frontend Developer</p>
  </header>

  <nav class="navbar">
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="https://www.linkedin.com/in/alsaalsa0/" target="_blank">LinkedIn</a></li>
    </ul>
    <button id="darkModeToggle">Toggle Dark Mode</button>
  </nav>

  <div id="about" class="main-content">
    <h2>About Me</h2>
    <p>In the professional realm, I navigate with a quiet confidence that often surprises those who know me outside of work. An introvert at heart, I find my strength in the calm I maintain amidst the storm of challenges that come my way. My curiosity is boundless, driving me to continuously explore and learn new things. Each challenge is an opportunity for growth, and I embrace them with open arms, always eager to stretch the limits of what I can achieve. In a world that's always changing, I find my constant in the pursuit of knowledge and the satisfaction of overcoming the obstacles laid before me.</p>
  </div>

  <div id="portfolio" class="main-content">
    <h2>Portfolio</h2>
    <p>Check out some of my recent projects:</p>
    <!-- Add your portfolio items here -->
  </div>

  <div id="contact" class="main-content">
    <h2>Contact Me</h2>
    <p>Feel free to get in touch:</p>
    <p>Email: alishapandey48@gmail.com</p>
  </div>

</div>

<footer class="footer">
  <p>&copy; 2024 Alisha Pandey. All rights reserved.</p>
</footer>

<script>
// JavaScript code here
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});
</script>

</body>
</html>
