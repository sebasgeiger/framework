<script>
    import 'global.css';
  </script>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
  <main>
    <slot />
  </main>
  <footer>
    <p>&copy;<span class="numbers">2023</span> Sebastian Geiger</p>
  </footer>

  <style>
    nav, footer {
      display: flex;
      justify-content: space-evenly;
      padding: .5em;
      background-color:honeydew;
      color: seagreen;
    }
    main {
      grid-row: 2;
    }
    footer {
    grid-row: 3;
    position: sticky;
    bottom: 0;
  }
  </style>