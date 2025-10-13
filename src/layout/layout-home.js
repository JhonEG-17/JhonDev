class LayoutHome extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="__home-content" id="home">
                <p class="__home-paragraph">Hola, soy</p>
                <h2 class="__home-title">Jhonatan Espinal</h2>
                <p><small class="__home-subtitle">Desarrollador Web | Diseñador Frontend</small></p>
                <app-skills-slider></app-skills-slider>
                <div class="__home-btns">
                    <a class="__home-btn-download icon-download" href="public/files/Jhonatan-Espinal-Garcia-CV.pdf" target="_blank" download rel="noopener noreferrer" title="Descargar el currículum de Jhonatan Espinal" aria-label="Descargar el currículum de Jhonatan Espinal" tabindex="0"> Descargar CV</a>
                    <a class="__links-item icon-linkedin-no-bg" href="https://www.linkedin.com/in/jhoneg" target="_blank" rel="noopener noreferrer" title="Enlace a perfil de LinkedIn" aria-label="enlace a perfil de LinkedIn" tabindex="0"></a>
                    <a class="__links-item icon-github" href="https://github.com/JhonEG-17" target="_blank" rel="noopener noreferrer" title="Enlace a perfil de GitHub" aria-label="enlace a perfil de GitHub" tabindex="0"></a>
                </div>
            </section>
        `;
    }
}

customElements.define("layout-home", LayoutHome);