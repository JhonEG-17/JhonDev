class layoutAboutMe extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <section id="about" class="section-about">

                <article class="__about-text">
                    <h2 class="__title">¿Quien soy yo?</h2>
                    <hr class="__line">
                    <h3 class="__subtitle">Soy Un Desarrollador y Diseñador Web</h3>
                    <p class="__text">Mi nombre es Jhonatan Espinal, tengo 21 años y soy un desarrollador web con muchas ganas de crear soluciones tecnológicas y así brindar soluciones a problemas reales.</p>
                    <a class="__btn-download icon-download" href="public/files/Jhonatan-Espinal-Garcia-CV.pdf" target="_blank" download rel="noopener noreferrer" title="Descargar el currículum de Jhonatan Espinal" aria-label="Descargar el currículum de Jhonatan Espinal" tabindex="0"> Descargar CV</a>

                </article>

                <aside class="__about-img">
                    <img class="__img" src="src/assets/img/fotoperfil/foto-jhonatan-espinal.webp" alt="Jhonatan Espinal" width="400px" height="450px" loading="lazy" />
                </aside>
                
            </section>
        `;
    }
}
  
customElements.define("layout-about-me", layoutAboutMe);