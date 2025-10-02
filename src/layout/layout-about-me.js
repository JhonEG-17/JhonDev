class layoutAboutMe extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <section id="about" class="section-about">

                <article class="__about-text">
                    <h2 class="__title">¿Quien soy yo?</h2>
                    <hr class="__line">
                    <h3 class="__subtitle">Soy Un Desarrollador y Diseñador Web</h3>
                    <p class="__text">Desarrollador Web Frontend con experiencia demostrada en la creación de interfaces modernas, accesibles y de alto rendimiento utilizando React.js, Next.js y TypeScript. Mi objetivo es transformar ideas complejas en soluciones digitales intuitivas y escalables.</p>
                    <p class="__text">Mi pasión por la tecnología me llevó a fundar JEG Dev Studios, un proyecto donde he liderado el desarrollo de soluciones a medida. Mi stack tecnológico principal incluye React, Next.js, Node.js, TypeScript, Tailwind CSS y Firebase. Busco aplicar mi experiencia para contribuir a proyectos desafiantes y seguir creciendo en un equipo innovador.</p>
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