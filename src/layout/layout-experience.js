class layoutExperience extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="section__experience" id="experience">
                <h2 class="__title">Mi experiencia</h2>
                <hr class="__line">
                <ul class="__experience-list">
                    <li class="__experience-item">
                        <img src="src/assets/icons/icons-webp/etn-logo.webp" alt="Logo de la empres ETN Turistar Lujo" class="__card-img">
                        <div class="__experience-content">
                            <small class="__card-date"> 20 - feb - 2025 </small>
                            <h3 class="__card-subtitle icon-embed"> Desarrollador Web | ETN Turistar Lujo</h3>
                            <p class="__card-text"> Mantenimiento y creacion de sitios web, maquetado y estilado de sitios web.</p>
                        </div>
                    </li>
                    <li class="__experience-item">
                        <img src="src/assets/icons/icons-webp/jegdevstudios-logo.webp" alt="Logo de la empres ETN Turistar Lujo" class="__card-img">
                        <div class="__experience-content">
                            <small class="__card-date"> 20 - mayo - 2024 </small>
                            <h3 class="__card-subtitle icon-embed"> CEO & Dev Web | JEG Dev Studios</h3>
                            <p class="__card-text">Direccion, gestion y desarrollo de sitios web, maquetado y estilado de sitios web.</p>
                        </div>
                    </li>
                </ul>
            </section>
        `;
    }
}

customElements.define("layout-experience", layoutExperience);