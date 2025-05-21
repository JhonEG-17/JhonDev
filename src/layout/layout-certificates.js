class LayoutCertificates extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="certificates" class="section-certificates">
                <h2 class="__title">Certificados</h2>
                <ul class="__certificates-list">
                    <li class="__certificates__item">
                        <img class="__certificates__img" src="src/assets/img/certifications/HTML-ESENCIAL.webp" alt="Certificado de HTML5 Esencial">
                    </li>
                    <li class="__certificates__item">
                        <img class="__certificates__img" src="src/assets/img/certifications/CertificadoHTMLCSS.webp" alt="Certificado de HTML5 y CSS3">
                    </li>
                    <li class="__certificates__item">
                        <img class="__certificates__img" src="src/assets/img/certifications/certificate-css-avanzado.webp" alt="Certificado de CSS3 avanzado">
                    </li>
                    <li class="__certificates__item">
                        <img class="__certificates__img" src="src/assets/img/certifications/Bases-de-datos-con-un-cafe.webp" alt="Certificado de teoria bases de datos">
                    </li>
                    <li class="__certificates__item">
                        <img class="__certificates__img" src="src/assets/img/certifications/BD-Relacionales-con-MySQL.webp" alt="Certificado de bases de datos relacional con MySQL y PHP MyAdmin">
                    </li>
                    <li class="__certificates__item">
                        <img class="__certificates__img" src="src/assets/img/certifications/certificate-QA-desde-cero.webp" alt="Certificadod de QA teorico">
                    </li>
                    <li class="__certificates__item">
                        <img class="__certificates__img" src="src/assets/img/certifications/certificate-diseño-inclusivo.webp" alt="Certificado de diseño inclusivo ó W3C">
                    </li>
                    <li class="__certificates__item">
                        <img class="__certificates__img" src="src/assets/img/certifications/Certificado-Python-santander.webp" alt="Certificado de Python">
                    </li>
                    <li class="__certificates__item">
                        <img class="__certificates__img" src="src/assets/img/certifications/Machine-learning.webp" alt="Certificado de teoria de machine learning">
                    </li>
                    <li class="__certificates__item">
                        <img class="__certificates__img" src="src/assets/img/certifications/Certificado-C-plus-plus.webp" alt="Certficado de C++">
                    </li>
                </ul>
            </section>
        `;

    }
}
customElements.define('layout-certificates', LayoutCertificates);