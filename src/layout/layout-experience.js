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
                            <p class="__card-text">Lideré la reconstrucción técnica de sitios web clave, logrando un aumento del 40-50% en rendimiento y accesibilidad. Implementé optimización SEO, mejoras de carga con imágenes WebP/AVIF y el flujo de trabajo con Git/GitHub para el equipo.</p>
                        </div>
                    </li>
                    <li class="__experience-item">
                        <img src="src/assets/icons/icons-webp/jegdevstudios-logo.webp" alt="Logo de la empres ETN Turistar Lujo" class="__card-img">
                        <div class="__experience-content">
                            <small class="__card-date"> 20 - mayo - 2024 </small>
                            <h3 class="__card-subtitle icon-embed"> CEO & Dev Web | JEG Dev Studios</h3>
                            <p class="__card-text">Liderazgo y desarrollo integral de proyectos full-stack. Responsable del desarrollo frontend con React/Next.js, backend con Node.js, y la implementación de estrategias SEO y marketing digital.</p>
                        </div>
                    </li>
                </ul>
            </section>
        `;
    }
}

customElements.define("layout-experience", layoutExperience);