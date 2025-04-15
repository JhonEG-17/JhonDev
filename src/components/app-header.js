import './app-skills-slider.js';

class AppHeader extends HTMLElement {
    observer = null;
    navBarContent = null;
    // Referencias para el menú móvil
    navToggle = null;
    navbarNav = null;

    connectedCallback() {
        this.innerHTML = `
            <header class="header-container">
                <nav class="__navbar" id="navbar">
                    <div class="__navbar-brand">
                        <h1 class="__brand-title">JhonDev</h1>
                        <p class="__brand-subtitle">Desarrollador Web | Diseñador Frontend</p>
                    </div>
                    <ul class="__navbar-nav" id="navbar-nav-list">
                        <li class="__nav-item">
                            <a class="__item-link" href="#about">Sobre mi</a>
                        </li>
                        <li class="__nav-item">
                            <a class="__item-link" href="#portfolio">Portafolio</a>
                        </li>
                        <li class="__nav-item">
                            <a class="__item-link" href="#certificates">Certificados</a>
                        </li>
                        <li class="__nav-item">
                            <a class="__item-link" href="#contact">Contacto</a>
                        </li>
                    </ul>
                    <button id="toggleDarkMode" class="__dark-mode-toggle" aria-label="Cambiar modo oscuro">🌙</button>
                    <button class="__navbar-toggle icon-menu" type="button" aria-controls="navbar-nav-list" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                </nav>

                <div class="__header-content" id="header-content">
                    <p class="__header-paragraph">Hola, soy</p>
                    <h2 class="__header-title">Jhonatan Espinal</h2>
                    <small class="__header-subtitle">Desarrollador Web | Diseñador Frontend</small>
                    <app-skills-slider></app-skills-slider>
                    <div class="__header-btns">
                        <a class="__header-btn-download icon-download" href="../assets/files/Jhonatan-Espinal-Garcia-CV.pdf" target="_blank" rel="noopener noreferrer" aria-label="Descargar CV"> Descargar CV</a>
                        <a class="__links-item icon-linkedin-no-bg" href="https://www.linkedin.com/in/jhoneg" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"></a>
                        <a class="__links-item icon-github" href="https://github.com/JhonEG-17" target="_blank" rel="noopener noreferrer" aria-label="GitHub"></a>
                    </div>
                </div>
            </header>
        `;

        // --- Selección de elementos ---
        this.navBarContent = this.querySelector('#navbar');
        this.navToggle = this.querySelector('.__navbar-toggle'); // Seleccionamos el botón del menú
        this.navbarNav = this.querySelector('#navbar-nav-list'); // Seleccionamos la lista de navegación

        
        // --- Añadir Listeners ---
        this.addDarkModeToggleListener();
        this.addMobileMenuToggleListener();
    }

    // --- Listener Modo Oscuro (sin cambios funcionales, solo selector si cambiaste clase) ---
    addDarkModeToggleListener() {
        // Usa '#toggleDarkMode' o '.__dark-mode-toggle' si añadiste esa clase
        const toggleButton = this.querySelector('#toggleDarkMode');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => {
                const isDarkMode = document.body.classList.toggle('dark-mode');
                toggleButton.textContent = isDarkMode ? '☀️' : '🌙';
                toggleButton.setAttribute('aria-label', isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
            });
            // Inicializar texto/label basado en el estado actual al cargar
            const isInitiallyDark = document.body.classList.contains('dark-mode');
             toggleButton.textContent = isInitiallyDark ? '☀️' : '🌙';
             toggleButton.setAttribute('aria-label', isInitiallyDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
        }
    }

    // --- NUEVO: Listener para el Menú Móvil ---
    addMobileMenuToggleListener() {
        if (this.navToggle && this.navbarNav) {
            this.navToggle.addEventListener('click', () => {
                // Alterna una clase en la lista de navegación para mostrarla/ocultarla
                const isExpanded = this.navbarNav.classList.toggle('is-active');
                // Actualiza el atributo aria-expanded en el botón
                this.navToggle.setAttribute('aria-expanded', isExpanded);
            });
        } else {
             console.error("AppHeader: No se encontraron .__navbar-toggle o #navbar-nav-list.");
        }
    }
}

customElements.define("app-header", AppHeader);
