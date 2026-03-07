# University-Project

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Página de películas de prueba en XHTML" />
  <title>adripeli- las mejores peliculas </title>
  <style type="text/css">
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap');

    :root {
      --negro: #0a0a0a;
      --carbon: #111111;
      --gris-oscuro: #1c1c1c;
      --gris-medio: #2e2e2e;
      --oro: #c9a84c;
      --oro-claro: #e8c97a;
      --crema: #f5f0e8;
      --blanco: #ffffff;
      --rojo: #c0392b;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background-color: var(--negro);
      color: var(--crema);
      font-family: 'DM Sans', sans-serif;
      font-weight: 300;
      min-height: 100vh;
      overflow-x: hidden;
    }

    /* ── HEADER ── */
    header {
      background-color: var(--carbon);
      border-bottom: 1px solid var(--gris-medio);
      padding: 0 2.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 72px;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .logo {
      font-family: 'Playfair Display', serif;
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--oro);
      letter-spacing: 0.04em;
      text-decoration: none;
    }

    .logo span {
      color: var(--crema);
    }

    nav ul {
      list-style: none;
      display: flex;
      gap: 2rem;
    }

    nav ul li a {
      color: var(--crema);
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 400;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      opacity: 0.7;
      transition: opacity 0.2s;
    }

    nav ul li a:hover {
      opacity: 1;
      color: var(--oro-claro);
    }

    /* ── HERO ── */
    .hero {
      background: linear-gradient(160deg, #1a0f00 0%, var(--negro) 60%);
      padding: 5rem 2.5rem 4rem;
      border-bottom: 1px solid var(--gris-medio);
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: -80px;
      right: -80px;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%);
      pointer-events: none;
    }

    .hero h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2.5rem, 5vw, 4.5rem);
      font-weight: 900;
      line-height: 1.05;
      color: var(--blanco);
      max-width: 700px;
    }

    .hero h1 em {
      font-style: italic;
      color: var(--oro);
    }

    .hero p {
      margin-top: 1.2rem;
      font-size: 1rem;
      opacity: 0.6;
      max-width: 480px;
      line-height: 1.7;
    }

    .hero-badge {
      display: inline-block;
      background-color: var(--gris-oscuro);
      border: 1px solid var(--gris-medio);
      color: var(--oro);
      font-size: 0.75rem;
      font-weight: 500;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      padding: 0.35rem 0.9rem;
      border-radius: 2px;
      margin-bottom: 1.5rem;
    }

    /* ── FILTROS ── */
    .filtros {
      padding: 1.5rem 2.5rem;
      border-bottom: 1px solid var(--gris-medio);
      background-color: var(--carbon);
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    .filtros span {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      opacity: 0.5;
      margin-right: 0.5rem;
    }

    .filtro-btn {
      background: transparent;
      border: 1px solid var(--gris-medio);
      color: var(--crema);
      padding: 0.4rem 1rem;
      font-family: 'DM Sans', sans-serif;
      font-size: 0.82rem;
      cursor: pointer;
      border-radius: 2px;
      transition: all 0.2s;
    }

    .filtro-btn:hover,
    .filtro-btn.activo {
      background-color: var(--oro);
      border-color: var(--oro);
      color: var(--negro);
      font-weight: 500;
    }

    /* ── GRID DE PELÍCULAS ── */
    main {
      padding: 3rem 2.5rem;
      max-width: 1400px;
      margin: 0 auto;
    }

    .seccion-titulo {
      font-family: 'Playfair Display', serif;
      font-size: 1.1rem;
      font-weight: 400;
      color: var(--oro);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 1.8rem;
      padding-bottom: 0.8rem;
      border-bottom: 1px solid var(--gris-medio);
    }

    .peliculas-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 1.8rem;
    }

    /* ── TARJETA ── */
    .pelicula-card {
      background-color: var(--carbon);
      border: 1px solid var(--gris-medio);
      border-radius: 3px;
      overflow: hidden;
      transition: transform 0.25s ease, border-color 0.25s ease;
      position: relative;
    }

    .pelicula-card:hover {
      transform: translateY(-5px);
      border-color: var(--oro);
    }

    .pelicula-poster {
      width: 100%;
      aspect-ratio: 2/3;
      object-fit: cover;
      display: block;
      background-color: var(--gris-oscuro);
    }

    .poster-placeholder {
      width: 100%;
      aspect-ratio: 2/3;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 3.5rem;
      background: linear-gradient(135deg, var(--gris-oscuro) 0%, var(--gris-medio) 100%);
    }

    .pelicula-badge {
      position: absolute;
      top: 0.75rem;
      left: 0.75rem;
      background-color: var(--rojo);
      color: var(--blanco);
      font-size: 0.65rem;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 0.25rem 0.6rem;
      border-radius: 2px;
    }

    .pelicula-info {
      padding: 1.1rem 1.2rem 1.3rem;
    }

    .pelicula-genero {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: var(--oro);
      margin-bottom: 0.4rem;
    }

    .pelicula-titulo {
      font-family: 'Playfair Display', serif;
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--blanco);
      line-height: 1.25;
      margin-bottom: 0.5rem;
    }

    .pelicula-meta {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      font-size: 0.78rem;
      opacity: 0.55;
      margin-bottom: 0.75rem;
    }

    .pelicula-meta span::before {
      content: '·';
      margin-right: 0.8rem;
    }

    .pelicula-meta span:first-child::before {
      content: '';
      margin-right: 0;
    }

    .pelicula-desc {
      font-size: 0.82rem;
      line-height: 1.65;
      opacity: 0.6;
      margin-bottom: 1rem;
    }

    .pelicula-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .rating {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      font-size: 0.85rem;
      color: var(--oro-claro);
      font-weight: 500;
    }

    .rating-estrellas {
      font-size: 0.7rem;
      letter-spacing: 0.05em;
    }

    .btn-ver {
      background: transparent;
      border: 1px solid var(--oro);
      color: var(--oro);
      padding: 0.35rem 0.9rem;
      font-family: 'DM Sans', sans-serif;
      font-size: 0.75rem;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      cursor: pointer;
      border-radius: 2px;
      text-decoration: none;
      transition: all 0.2s;
    }

    .btn-ver:hover {
      background-color: var(--oro);
      color: var(--negro);
    }

    /* ── DESTACADO ── */
    .destacado {
      grid-column: span 2;
      display: grid;
      grid-template-columns: 1fr 1.6fr;
    }

    .destacado .poster-placeholder {
      aspect-ratio: auto;
      min-height: 320px;
      font-size: 5rem;
    }

    .destacado .pelicula-titulo {
      font-size: 1.5rem;
    }

    .destacado .pelicula-desc {
      font-size: 0.88rem;
    }

    /* ── FOOTER ── */
    footer {
      border-top: 1px solid var(--gris-medio);
      background-color: var(--carbon);
      padding: 2.5rem;
      text-align: center;
    }

    footer p {
      font-size: 0.8rem;
      opacity: 0.4;
      letter-spacing: 0.06em;
    }

    footer .footer-logo {
      font-family: 'Playfair Display', serif;
      font-size: 1.2rem;
      color: var(--oro);
      margin-bottom: 0.8rem;
      display: block;
    }

    /* ── RESPONSIVE ── */
    @media (max-width: 768px) {
      header { padding: 0 1.2rem; }
      nav ul { gap: 1.2rem; }
      .hero { padding: 3rem 1.2rem; }
      .filtros { padding: 1rem 1.2rem; }
      main { padding: 2rem 1.2rem; }
      .destacado { grid-column: span 1; grid-template-columns: 1fr; }
      .destacado .poster-placeholder { min-height: 200px; }
    }
  </style>
</head>
<body>

  <!-- ══ HEADER ══ -->
  <header>
    <a href="#" class="logo">adri<span>pelis</span></a>
    <nav>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Estrenos</a></li>
        <li><a href="#">Géneros</a></li>
        <li><a href="#">Mi Lista</a></li>
      </ul>
    </nav>
  </header>

  <!-- ══ HERO ══ -->
  <div class="hero">
    <div class="hero-badge">Catálogo 2024</div>
    <h1>Las mejores<br /><em>películas</em><br /> que veras </h1>
    <p>Explora nuestra  selecion de peliculas mas vista y taquillera de los ultimos años .</p>
  </div>

  <!-- ══ FILTROS ══ -->
  <div class="filtros">
    <span>Filtrar:</span>
    <button class="filtro-btn activo" type="button">Todos</button>
    <button class="filtro-btn" type="button">Acción</button>
    <button class="filtro-btn" type="button">Drama</button>
    <button class="filtro-btn" type="button">Ciencia Ficción</button>
    <button class="filtro-btn" type="button">Animación</button>
    <button class="filtro-btn" type="button">Terror</button>
    <button class="filtro-btn" type="button">Romance</button>
    <button class="filtro-btn" type="button">Anime</button>
  </div>

  <!-- ══ CONTENIDO PRINCIPAL ══ -->
  <main>
    <p class="seccion-titulo">Destacados del Mes</p>

    <div class="peliculas-grid">

      <!-- DESTACADO -->
      <div class="pelicula-card destacado">
        <div class="poster-placeholder">🎬</div>
        <div class="pelicula-info">
          <p class="pelicula-genero">Ciencia Ficción · Acción</p>
          <h2 class="pelicula-titulo">Dune: Parte Dos</h2>
          <div class="pelicula-meta">
            <span>2024</span>
            <span>166 min</span>
            <span>PG-13</span>
          </div>
          <p class="pelicula-desc">Paul Atreides se une a los Fremen en una guerra contra los Harkonnen mientras intenta evitar un futuro aterrador que solo él puede predecir. Una épica de escala colosal que redefine el cine de ciencia ficción moderno.</p>
          <div class="pelicula-footer">
            <div class="rating">
              <span class="rating-estrellas">★★★★★</span>
              <span>8.8</span>
            </div>
            <a href="#" class="btn-ver">Ver detalles</a>
          </div>
        </div>
      </div>

      <!-- PELÍCULA 2 -->
      <div class="pelicula-card">
        <span class="pelicula-badge">Estreno</span>
        <div class="poster-placeholder">🦁</div>
        <div class="pelicula-info">
          <p class="pelicula-genero">Animación · Aventura</p>
          <h2 class="pelicula-titulo">El Rey León: El Origen</h2>
          <div class="pelicula-meta">
            <span>2024</span>
            <span>118 min</span>
          </div>
          <p class="pelicula-desc">La historia de Mufasa antes de convertirse en rey, revelando sus orígenes y el camino hacia la legendaria Tierra del León.</p>
          <div class="pelicula-footer">
            <div class="rating">
              <span class="rating-estrellas">★★★★☆</span>
              <span>7.4</span>
            </div>
            <a href="#" class="btn-ver">Ver detalles</a>
          </div>
        </div>
      </div>

      <!-- PELÍCULA 3 -->
      <div class="pelicula-card">
        <div class="poster-placeholder">🕷️</div>
        <div class="pelicula-info">
          <p class="pelicula-genero">Acción · Superhéroes</p>
          <h2 class="pelicula-titulo">Deadpool &amp; Wolverine</h2>
          <div class="pelicula-meta">
            <span>2024</span>
            <span>127 min</span>
          </div>
          <p class="pelicula-desc">Wade Wilson y Logan se unen en una misión interdimensional que amenaza tanto a los superhéroes como al multiverso completo.</p>
          <div class="pelicula-footer">
            <div class="rating">
              <span class="rating-estrellas">★★★★☆</span>
              <span>7.8</span>
            </div>
            <a href="#" class="btn-ver">Ver detalles</a>
          </div>
        </div>
      </div>

      <!-- PELÍCULA 4 -->
      <div class="pelicula-card">
        <span class="pelicula-badge">Nuevo</span>
        <div class="poster-placeholder">🌊</div>
        <div class="pelicula-info">
          <p class="pelicula-genero">Drama · Aventura</p>
          <h2 class="pelicula-titulo">Twisters</h2>
          <div class="pelicula-meta">
            <span>2024</span>
            <span>122 min</span>
          </div>
          <p class="pelicula-desc">Una meteoróloga y un cazador de tormentas se unen para enfrentar tornados de categoría sin precedentes en las llanuras de Oklahoma.</p>
          <div class="pelicula-footer">
            <div class="rating">
              <span class="rating-estrellas">★★★☆☆</span>
              <span>6.9</span>
            </div>
            <a href="#" class="btn-ver">Ver detalles</a>
          </div>
        </div>
      </div>

      <!-- PELÍCULA 5 -->
      <div class="pelicula-card">
        <div class="poster-placeholder">👾</div>
        <div class="pelicula-info">
          <p class="pelicula-genero">Terror · Ciencia Ficción</p>
          <h2 class="pelicula-titulo">Alien: Romulus</h2>
          <div class="pelicula-meta">
            <span>2024</span>
            <span>119 min</span>
          </div>
          <p class="pelicula-desc">Un grupo de jóvenes colonos exploran una estación espacial abandonada y se encuentran cara a cara con la forma de vida más aterradora del universo.</p>
          <div class="pelicula-footer">
            <div class="rating">
              <span class="rating-estrellas">★★★★☆</span>
              <span>7.3</span>
            </div>
            <a href="#" class="btn-ver">Ver detalles</a>
          </div>
        </div>
      </div>

      <!-- PELÍCULA 6 -->
      <div class="pelicula-card">
        <div class="poster-placeholder">🤖</div>
        <div class="pelicula-info">
          <p class="pelicula-genero">Drama · Histórico</p>
          <h2 class="pelicula-titulo">Oppenheimer</h2>
          <div class="pelicula-meta">
            <span>2023</span>
            <span>180 min</span>
          </div>
          <p class="pelicula-desc">La historia del físico J. Robert Oppenheimer y su papel en el desarrollo de la primera bomba atómica durante la Segunda Guerra Mundial.</p>
          <div class="pelicula-footer">
            <div class="rating">
              <span class="rating-estrellas">★★★★★</span>
              <span>8.9</span>
            </div>
            <a href="#" class="btn-ver">Ver detalles</a>
          </div>
        </div>
      </div>

    </div><!-- /peliculas-grid -->

  </main>

  <!-- ══ FOOTER ══ -->
  <footer>
    <span class="footer-logo">adripelis</span>
    <p>Página de prueba XHTML 1.0 Strict · Todos los derechos reservados © 2024</p>
  </footer>

  <script type="text/javascript">
    // Lógica de filtros
    var botones = document.getElementsByClassName('filtro-btn');
    for (var i = 0; i < botones.length; i++) {
      botones[i].onclick = function() {
        for (var j = 0; j < botones.length; j++) {
          botones[j].className = botones[j].className.replace(' activo', '');
          if (botones[j].className.indexOf('activo') === -1 && botones[j] !== this) {
            // ya limpio
          }
        }
        if (this.className.indexOf('activo') === -1) {
          this.className += ' activo';
        }
      };
    }
  </script>

</body>
</html>
