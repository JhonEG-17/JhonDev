class LayoutHome extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="__home-content" id="header-content">
                <p class="__home-paragraph">Hola, soy</p>
                <h2 class="__home-title">Jhonatan Espinal</h2>
                <small class="__home-subtitle">Desarrollador Web | Diseñador Frontend</small>
                <app-skills-slider></app-skills-slider>
                <div class="__home-btns">
                    <a class="__home-btn-download icon-download" href="public/files/Jhonatan-Espinal-Garcia-CV.pdf" target="_blank" rel="noopener noreferrer" aria-label="Descargar CV"> Descargar CV</a>
                    <a class="__links-item icon-linkedin-no-bg" href="https://www.linkedin.com/in/jhoneg" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"></a>
                    <a class="__links-item icon-github" href="https://github.com/JhonEG-17" target="_blank" rel="noopener noreferrer" aria-label="GitHub"></a>
                </div>
            </section>
        `;
    }
}

customElements.define("layout-home", LayoutHome);