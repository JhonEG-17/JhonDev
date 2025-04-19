class AppPortfolio extends HTMLElement {
  constructor() {
    super();
    this.portfolioData = [];
    // Referencias a los botones para evitar buscarlos repetidamente
    this.prevButton = null;
    this.nextButton = null;
  }

  async connectedCallback() {
    await this.loadPortfolioData();
    this.render(); // Renderiza el HTML, incluyendo los botones
    // Guarda las referencias a los botones después de renderizar
    this.prevButton = this.querySelector('.portfolio-prev-arrow');
    this.nextButton = this.querySelector('.portfolio-next-arrow');
    this.initializeSlider();
  }

  disconnectedCallback() {
    // Limpia el slider si el componente se desconecta del DOM
    const sliderProyects = this.querySelector('.__portfolio-articles');
    if (sliderProyects && typeof $ !== 'undefined' && $.fn.slick && $(sliderProyects).hasClass('slick-initialized')) {
        try {
            $(sliderProyects).slick('unslick');
        } catch (error) {
            console.warn("Error al intentar destruir el slider Slick:", error);
        }
    }
  }


  async loadPortfolioData() {
    try {
      const response = await fetch('src/data/portfolio-data.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.portfolioData = await response.json();
    } catch (error) {
      console.error("Error al cargar los datos del portafolio:", error);
      this.innerHTML = `<p>Error al cargar los proyectos.</p>`;
    }
  }

  render() {
    if (!this.portfolioData || this.portfolioData.length === 0) {
      if (!this.innerHTML.includes('Error')) {
         this.innerHTML = `<p>No hay proyectos para mostrar.</p>`;
      }
      return;
    }

    const portfolioItemsHTML = this.portfolioData
      .map(
        (item) => `
      <li>
        <div class="__portfolio-card">
          <header class="__card-content">
            <img src="${item.imgSrc}" class="__card-img" alt="${item.imgAlt}">
            <aside class="__card-body">
              <div class="__card-text">
                <h3 class="__card-title">${item.title}</h3>
                <p class="__card-text">${item.description}</p>
                <ul class="__card__tech-list">
                  ${item.techIcons
                    .map((icon) => `<li><i class="__icon-size ${icon}"></i></li>`)
                    .join("")}
                </ul>
              </div>
            </aside>
          </header>
          <footer class="__card-links">
            ${item.links
              .map(
                (link) => `
              <a
                class="__card-link ${link.bgClass} ${link.iconClass}"
                href="${link.href}"
                role="button"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="${link.ariaLabel}"
              ></a>
            `
              )
              .join("")}
          </footer>
        </div>
      </li>
    `
      )
      .join("");

    // 1. Añade los elementos para los botones personalizados
    this.innerHTML = `
      <article id="portfolio" class="section-portfolio">
        <h2 class="__portfolio-title">Proyectos</h2>
        <div class="__portfolio-slider-container">
          <ul class="__portfolio-articles">
            ${portfolioItemsHTML}
          </ul>
          <button class="__portfolio-arrow portfolio-prev-arrow" aria-label="Proyecto anterior">
            <
          </button>
          <button class="__portfolio-arrow portfolio-next-arrow" aria-label="Siguiente proyecto">
            >
          </button>
        </div>
      </article>
    `;
  }

  initializeSlider() {
    // Usamos requestAnimationFrame para asegurar que el DOM esté listo
    requestAnimationFrame(() => {
        const sliderProyects = this.querySelector('.__portfolio-articles');
        // Asegúrate de que los botones existen antes de inicializar
        if (sliderProyects && this.prevButton && this.nextButton && typeof $ !== 'undefined' && $.fn.slick) {
            if ($(sliderProyects).hasClass('slick-initialized')) {
                // Intentar destruir el slider anterior de forma segura
                 try {
                    $(sliderProyects).slick('unslick');
                } catch (error) {
                    console.warn("Error al intentar destruir el slider Slick antes de reinicializar:", error);
                }
            }
            $(sliderProyects).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                // --- Configuración de botones personalizados ---
                arrows: true, // Asegúrate de que las flechas estén habilitadas
                prevArrow: this.prevButton, // Pasa la referencia al elemento DOM
                nextArrow: this.nextButton, // Pasa la referencia al elemento DOM
                // --- Fin Configuración ---
            });
            $(sliderProyects).slick('refresh');

        } else if (sliderProyects) {
            // Mensaje de advertencia si falta jQuery, Slick o los botones
             if (typeof $ === 'undefined' || !$.fn.slick) {
                console.warn('Slick slider no se pudo inicializar: jQuery o Slick no están disponibles.');
             } else if (!this.prevButton || !this.nextButton) {
                 console.warn('Slick slider no se pudo inicializar: Botones personalizados no encontrados en el DOM.');
             }
        }
    });
  }
}

customElements.define("app-portfolio", AppPortfolio);
