class appCardAboutMe extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <article class="__about-me">

                <div class="__card-about-me">

                    <div class="__card-img-container">

                        <img class="__card-img" src="src/assets/img/fotoperfil/e3802d06.png" alt="Jhonatan Espinal">
                        <a class="__card-btn-download icon-download" href="public/files/Jhonatan-Espinal-Garcia-CV.pdf" target="_blank"> Descargar CV</a>
                    </div>

                    <div class="__card-content">

                        <h2 class="__card-title">¿Quien soy yo?</h2>
                        <hr class="___card-line">
                        <h3 class="__card-subtitle">Soy Un Desarrollador y Diseñador Web</h3>
                        <p class="__card-text">Mi nombre es Jhonatan Espinal, tengo 21 años y soy un desarrollador web con muchas ganas de crear soluciones tecnológicas y así brindar soluciones a problemas reales.</p>
                    </div>

                </div>

            </article>
        `;
    }
}
  
customElements.define("app-card-about-me", appCardAboutMe);