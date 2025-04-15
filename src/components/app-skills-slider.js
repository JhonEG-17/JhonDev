class AppSkillsSlider extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
          <section class="skills-slider-container">
            <div class="skills-slider" role="region"></div>
          </section>
        `;

        const skillsLogos = [
            { icon: "icon-html5" },
            { icon: "icon-css3" },
            { icon: "icon-javascript" },
            { icon: "icon-sass" },
            { icon: "icon-react" },
            { icon: "icon-bootstrap" },
            { icon: "icon-w3c" },
            { icon: "icon-node-dot-js" },
            { icon: "icon-csharp" },
            { icon: "icon-mysql" },
            { icon: "icon-wordpress" },
            { icon: "icon-python" },
            { icon: "icon-cplusplus" },
        ];

        // Es buena práctica seleccionar elementos dentro del contexto del componente
        const sliderElement = this.querySelector('.skills-slider');

        // 1. Duplicar los logos:
        const duplicatedLogos = [...skillsLogos, ...skillsLogos];

        // 2. Construir el HTML de los logos (un poco más eficiente)
        let logosHTML = '';
        duplicatedLogos.forEach((logo) => {
            logosHTML += `
              <div class="skills-slider-item">
                <i class="__icon-size ${logo.icon}"></i>
              </div>
            `;
        });

        // 3. Insertar los logos en el slider:
        // Usar el elemento específico en lugar de un selector global
        $(sliderElement).append(logosHTML);

        // 4. Configuración Slick:
        $(sliderElement).slick({
            slidesToShow: 10,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 4000,
            cssEase: "linear",
            infinite: true,
            arrows: false,
            pauseOnHover: false,
            pauseOnFocus: false,
            draggable: false,
            swipe: false,
            touchMove: false,
            responsive: [
                { breakpoint: 1280, settings: { slidesToShow: 6 } },
                { breakpoint: 1200, settings: { slidesToShow: 5 } },
                { breakpoint: 1024, settings: { slidesToShow: 4 } },
                { breakpoint: 768, settings: { slidesToShow: 3 } },
                { breakpoint: 480, settings: { slidesToShow: 2 } },
            ],
        });

        $(".skills-slider").slick("refresh");
    }
}
customElements.define("app-skills-slider", AppSkillsSlider);
