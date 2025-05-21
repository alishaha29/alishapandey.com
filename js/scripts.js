<head>
  <!-- add this Google Font link -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    /* theming via CSS variables */
    :root {
      --bg: #fff;
      --text: #333;
      --primary: #1e88e5;
      --secondary: #90caf9;
      --accent: #ff7043;
      --card-bg: #f7f7f7;
      --nav-bg: #fff;
      --footer-bg: #f1f1f1;
      --btn-bg: var(--primary);
      --btn-text: #fff;
      --transition: 0.3s ease;
    }
    body {
      font-family: 'Poppins', sans-serif;
      background: var(--bg);
      color: var(--text);
      margin: 0;
      line-height: 1.6;
      transition: background var(--transition), color var(--transition);
    }
    /* dark mode overrides */
    body.dark-mode {
      --bg: #121212;
      --text: #e0e0e0;
      --primary: #90caf9;
      --secondary: #1e88e5;
      --accent: #ffab91;
      --card-bg: #1e1e1e;
      --nav-bg: #1a1a1a;
      --footer-bg: #1a1a1a;
      --btn-bg: var(--secondary);
      --btn-text: #121212;
    }

    .container {
      max-width: 960px;
      margin: 0 auto;
      padding: 40px 20px;
    }

    .header {
      text-align: center;
      margin-bottom: 30px;
    }
    .header h1 {
      font-size: 2.5rem;
      font-weight: 700;
      letter-spacing: 1px;
    }
    .header p {
      font-size: 1.125rem;
      color: var(--accent);
    }

    .navbar {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      background: var(--nav-bg);
      padding: 12px 0;
      margin-bottom: 40px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: background var(--transition);
    }
    .navbar ul {
      display: flex;
      gap: 24px;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .navbar a {
      text-decoration: none;
      color: var(--text);
      font-weight: 500;
      transition: color var(--transition);
    }
    .navbar a:hover {
      color: var(--primary);
    }
    #darkModeToggle {
      padding: 8px 16px;
      border: none;
      border-radius: 20px;
      background: var(--btn-bg);
      color: var(--btn-text);
      cursor: pointer;
      font-weight: 600;
      transition: background var(--transition), color var(--transition);
    }
    #darkModeToggle:hover {
      opacity: 0.9;
    }

    .main-content {
      margin-bottom: 50px;
      text-align: center;
    }
    .main-content h2 {
      font-size: 2rem;
      margin-bottom: 16px;
      color: var(--primary);
    }
    .main-content p {
      max-width: 800px;
      margin: 0 auto;
    }

    .footer {
      background: var(--footer-bg);
      text-align: center;
      padding: 20px 0;
      font-size: 0.9rem;
      transition: background var(--transition);
    }
  </style>
</head>
