class appAbputMe extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <section id="about" class="section-about">

                <article class="__about-me">
                    <div class="__card-about-me">
                        <div class="__card-img-container">
                            <img class="__card-img" src="src/assets/img/fotoperfil/e3802d06.png" alt="Jhonatan Espinal">
                            <a class="__card-btn-download icon-download" href="src/assets/files/Jhonatan-Espinal-Garcia-CV.pdf" target="_blank"> Descargar CV</a>
                        </div>
                        <div class="__card-content">
                            <h2 class="__card-title">¿Quien soy yo?</h2>
                            <hr class="___card-line">
                            <h3 class="__card-subtitle">Soy Un Desarrollador y Diseñador Web</h3>
                            <p class="__card-text">Mi nombre es Jhonatan Espinal, tengo 21 años y soy un desarrollador web con muchas ganas de crear soluciones tecnológicas y así brindar soluciones a problemas reales.</p>
                        </div>
                    </div>
                </article>

                <aside class="__card-experience">
                    <h2 class="__card-title">Mi experiencia</h2>
                    <hr class="___card-line">
                    <div class="__experience-item">
                        <i class="icon-embed"></i>
                        <div class="__experience-content">
                            <small class="__card-date"> 20 - feb - 2025 </small>
                            <h3 class="__card-subtitle">Desarrollador Web | ETN Turistar Lujo</h3>
                            <p class="__card-text"> Mantenimiento y creacion de sitios web, maquetado y estilado de sitios web.</p>
                        </div>
                    </div>
                </aside>
                
            </section>
        `;
    }
}
  
customElements.define("app-about-me", appAbputMe);