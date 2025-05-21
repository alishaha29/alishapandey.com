<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Alisha Pandey – Frontend Developer</title>
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
  <!-- Google Font -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    /* CSS Variables for easy theming */
    :root {
      --clr-bg: #ffffff;
      --clr-text: #333333;
      --clr-accent: #1e88e5;
      --clr-card: #f7f9fb;
      --transition: 0.4s;
    }
    body.dark {
      --clr-bg: #121212;
      --clr-text: #e0e0e0;
      --clr-accent: #90caf9;
      --clr-card: #1e1e1e;
    }
    /* Base Reset */
    *, *::before, *::after {
      margin: 0; padding: 0; box-sizing: border-box;
    }
    body {
      font-family: 'Poppins', sans-serif;
      background: var(--clr-bg);
      color: var(--clr-text);
      line-height: 1.6;
      transition: background var(--transition), color var(--transition);
    }
    a { color: var(--clr-accent); text-decoration: none; }
    a:hover { opacity: 0.8; }
    img { max-width: 100%; display: block; }

    /* Container */
    .container {
      max-width: 960px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    /* Nav & Toggle */
    header {
      position: sticky; top: 0;
      background: var(--clr-bg);
      padding: 1rem 0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      z-index: 10;
    }
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      list-style: none;
      display: flex;
      gap: 1.5rem;
    }
    .toggle-btn {
      background: var(--clr-accent);
      color: #fff;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      cursor: pointer;
      transition: opacity var(--transition);
    }
    .toggle-btn:hover { opacity: 0.9; }

    /* Hero Section */
    #hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 60vh;
      text-align: center;
      background: linear-gradient(135deg, #1e88e5, #90caf9);
      color: #fff;
      padding: 2rem 1rem;
    }
    #hero h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }
    #hero p {
      font-size: 1.125rem;
      max-width: 600px;
    }

    /* Sections */
    section {
      padding: 4rem 0;
    }
    section h2 {
      text-align: center;
      color: var(--clr-accent);
      margin-bottom: 1.5rem;
      font-size: 2rem;
    }
    section p { max-width: 700px; margin: 0 auto 1.5rem; text-align: center; }

    /* Portfolio Grid */
    .grid {
      display: grid;
      gap: 2rem;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
    .card {
      background: var(--clr-card);
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 4px 8px rgba(0,0,0,0.05);
      transition: transform var(--transition), box-shadow var(--transition);
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    }
    .card h3 {
      margin-bottom: 0.75rem;
      color: var(--clr-accent);
    }

    /* Contact Form */
    form {
      max-width: 500px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    form input, form textarea {
      padding: 0.75rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      transition: border-color var(--transition);
    }
    form input:focus, form textarea:focus {
      border-color: var(--clr-accent);
      outline: none;
    }
    form button {
      align-self: center;
      background: var(--clr-accent);
      color: #fff;
      border: none;
      padding: 0.75rem 2rem;
      border-radius: 25px;
      cursor: pointer;
      transition: opacity var(--transition);
    }
    form button:hover { opacity: 0.9; }

    /* Footer */
    footer {
      text-align: center;
      padding: 2rem 0;
      background: var(--clr-card);
    }

    @media (max-width: 600px) {
      #hero h1 { font-size: 2rem; }
      header nav { flex-direction: column; gap: 1rem; }
    }
  </style>
</head>
<body>
  <header>
    <div class="container">
      <nav>
        <ul class="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button class="toggle-btn" id="theme-toggle">Dark Mode</button>
      </nav>
    </div>
  </header>

  <section id="hero">
    <div class="container">
      <h1>Hi, I’m Alisha Pandey</h1>
      <p>Frontend Developer passionate about building clean, user-friendly interfaces.</p>
    </div>
  </section>

  <section id="about">
    <div class="container">
      <h2>About Me</h2>
      <p>An introvert with boundless curiosity, I thrive on solving challenges and continuously learning new technologies to create engaging web experiences.</p>
    </div>
  </section>

  <section id="portfolio">
    <div class="container">
      <h2>Portfolio</h2>
      <div class="grid">
        <div class="card">
          <h3>Project One</h3>
          <p>Brief description of your first project. Swap in links or images as needed.</p>
        </div>
        <div class="card">
          <h3>Project Two</h3>
          <p>Brief description of your second project.</p>
        </div>
        <!-- Add more .card blocks here -->
      </div>
    </div>
  </section>

  <section id="contact">
    <div class="container">
      <h2>Contact Me</h2>
      <form action="mailto:alishapandey48@gmail.com" method="POST" enctype="text/plain">
        <input type="text" name="Name" placeholder="Your Name" required>
        <input type="email" name="Email" placeholder="Your Email" required>
        <textarea name="Message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </section>

  <footer>
    <div class="container">
      <p>&copy; 2025 Alisha Pandey. All rights reserved.</p>
    </div>
  </footer>

  <script>
    const btn = document.getElementById('theme-toggle');
    btn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      btn.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
    });
  </script>
</body>
</html>
