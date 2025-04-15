class appCardExperience extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <aside class="__card-experience">
                <h2 class="__card-title">Mi experiencia</h2>
                <hr class="___card-line">
                <ul class="__experience-list">
                    <li class="__experience-item">
                        <img src="src/assets/icons/icons-webp/etn-logo.webp" alt="Logo de la empres ETN Turistar Lujo" class="__card-img">
                        <div class="__experience-content">
                            <small class="__card-date"> 20 - feb - 2025 </small>
                            <h3 class="__card-subtitle icon-embed"> Desarrollador Web | ETN Turistar Lujo</h3>
                            <p class="__card-text"> Mantenimiento y creacion de sitios web, maquetado y estilado de sitios web.</p>
                        </div>
                    </div>
                </ul>
            </aside>
        `;
    }
}

customElements.define("app-card-experience", appCardExperience);