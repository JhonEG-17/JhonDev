class AppSkillsSlider extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
          <section class="skills-slider-container main-container">
            <div class="skills-slider" role="region"></div>
          </section>
        `;
  
      const skillsLogos = [
        /*{
          srcset: "src/assets/icons/icons-webp/Linkedin.png",
          src: "src/assets/icons/icons-svg/icon-html.svg",
          title: "Desarrollo con ",
          alt: "tech HTML",
        },
        {
          srcset: "src/assets/icons/icons-webp/Linkedin.png",
          src: "src/assets/icons/icons-svg/css.svg",
          title: "Paga a través de Mastercard",
          alt: "tech CSS",
        },
        {
          srcset: "src/assets/icons/icons-webp/Linkedin.png",
          src: "src/assets/icons/icons-svg/javascript.svg",
          title: "Paga a través de Amex",
          alt: "JavaScript",
        },*/
        {
          srcset: "src/assets/icons/icons-webp/Linkedin.png",
          src: "src/assets/icons/icons-svg/icon-react.svg",
          title: "Paga a través de Discover",
          alt: "React JS",
        },
        {
          srcset: "src/assets/icons/icons-webp/Linkedin.png",
          src: "src/assets/icons/icons-svg/icon-bootstrap.svg",
          title: "Paga a través de Banorte",
          alt: "Bootstrap",
        },
        {
          srcset: "src/assets/icons/icons-webp/Linkedin.png",
          src: "src/assets/icons/icons-svg/sass.svg",
          title: "Paga a través de HSBC",
          alt: "SaSS",
        },
        {
          srcset: "src/assets/icons/icons-webp/Linkedin.png",
          src: "src/assets/icons/icons-svg/godaddy.svg",
          title: "Paga a través de BBVA",
          alt: "BBVA",
        },
        /*{
          srcset: "src/assets/icons/icons-webp/Linkedin.png",
          src: "src/assets/icons/icons-svg/wordpress.svg",
          title: "Paga a través de Santander",
          alt: "Santander",
        },*/
        {
          srcset: "src/assets/icons/icons-webp/Linkedin.png",
          src: "src/assets/icons/icons-svg/icon-node-js.svg",
          title: "Paga a través de Banamex",
          alt: "Banamex",
        },
        {
          srcset: "src/assets/icons/icons-webp/Linkedin.png",
          src: "src/assets/icons/icons-svg/icon-c-sharp.svg",
          title: "Paga a través de Pay Cash",
          alt: "Pay Cash",
        },
        {
          srcset: "src/assets/icons/icons-webp/Linkedin.png",
          src: "src/assets/icons/icons-svg/icon-mysql.svg",
          title: "Paga a través de OXXO",
          alt: "OXXO",
        },
        {
          srcset: "src/assets/icons/icons-webp/Linkedin.png",
          src: "src/assets/icons/icons-svg/icon-c.svg",
          title: "Paga a través de 7-Eleven",
          alt: "7-Eleven",
        },
        {
          srcset: "src/assets/icons/icons-webp/Linkedin.png",
          src: "src/assets/icons/icons-svg/icon-c-mas.svg",
          title: "Paga a través de Walmart Express",
          alt: "Walmart Express",
        },
      ];
  
      $(document).ready(function () {
        // 1. Duplicar los logos:
        const duplicatedLogos = [...skillsLogos, ...skillsLogos]; // Creamos un nuevo array con los logos duplicados
  
        // Insertar los logos duplicados en el slider:
        duplicatedLogos.forEach((logo) => {
          $(".skills-slider").append(`
            <div>
              <picture>
                <source srcset="${logo.srcset}" type="image/webp">
                <img src="${logo.src}" title="${logo.title}" width="1" height="1" alt="${logo.alt}" loading="lazy">
              </picture>
            </div>
          `);
        });
  
        // Configuración Slick :
        $(".skills-slider").slick({
          slidesToShow: 10, // Mostrar 10 logos a la vez (ajustable segun los que queramos mostrar)
          slidesToScroll: 1, // Desplazar de 1 en 1
          autoplay: true, // Habilitar el desplazamiento automático
          autoplaySpeed: 0, // Eliminar la pausa para la iluciond el carrusel continuo: Establecer en 0 para que no haya pausa entre desplazamientos
          speed: 5000, // Ajuste de la velocidad: Tiempo en milisegundos que tarda en recorrer una "tira" de logos (se puede ajustar según la velocidad deseada)
          cssEase: "linear", // Desplazamiento lineal: Para asegurar una velocidad constante
          infinite: true, // Habilitar el loop infinito
          arrows: false, // Ocultar las flechas de navegación (ya que no se necesitan)
          pauseOnHover: false, // Deshabilitar la pausa al pasar el mouse por encima
          pauseOnFocus: false, // Deshabilitar la pausa al hacer foco en el slider
          draggable: false, // Deshabilitar el arrastre con el mouse ya que no es interactivo con el usuario
          swipe: false, // Deshabilitar el swipe en dispositivos táctiles
          touchMove: false, // Deshabilitar el movimiento táctil
          responsive: [
            { breakpoint: 1280, settings: { slidesToShow: 6 } }, // Ajustar para pantallas más grandes
            { breakpoint: 1200, settings: { slidesToShow: 5 } }, // Ajustar para pantallas más grandes
            { breakpoint: 1024, settings: { slidesToShow: 4 } }, // Ajustar para pantallas más pequeñas
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } },
          ],
        });
        $(".skills-slider").slick("refresh"); // Ya no es necesario
      });
    }
  }
customElements.define("app-skills-slider", AppSkillsSlider);