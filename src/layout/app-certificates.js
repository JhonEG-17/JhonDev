class AppCertificates extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <aside id="certificates" class="section-certificates">
                <h2 class="__title">Certificados</h2>
                <ul class="row row-cols-1 row-cols-sm-2 row-cols-md-5 gap-5 justify-content-evenly">
                    <li class="col card shadow p-0 m-0" style="max-width: 320px; min-width: 300px;">
                        <img src="assets/img/certifications/CertificadoHTMLCSS.webp" class="card-img-top" alt="imagen-certificado-html-y-css-de-todocode-academy" style="aspect-ratio: 16/9;">
                        <div class="card-body">
                            <h3 class="card-title">Certificado HTML y CSS desde CERO</h3>
                            <p class="card-text">En este curso desarrollé mis habilidades de nivel básico en HTML y CSS, el curso es impartido por la Ing. Luisina De Paula en la plataforma TodoCode Academy.</p>
                            <a class="icon-download" href="https://todocodeacademy.com/certificate/certificado-html-y-css-sez/" role="button">Ver</a>
                        </div>
                    </li>
                    <li class="col card shadow p-0 m-0" style="max-width: 320px; min-width: 300px;">
                        <img src="assets/img/certifications/HTML-ESENCIAL.webp" class="card-img-top" alt="imagen-certificado-html-semantico-learning-linkedin" style="aspect-ratio: 16/9;">
                        <div class="card-body">
                            <h3 class="card-title">HTML esencial</h3>
                            <p class="card-text">En este curso adquiri conocimiento de HTML semántico, maquetado con buenas practicas, entre otras cosas.</p>
                            <a class="icon-download" href="https://www.linkedin.com/learning/certificates/593febd7fd893642d970ef9725d23d4d07238e286b7aff43d6c7050490082e45?trk=share_certificate" role="button">Ver</a>
                        </div>
                    </li>
                    <li class="col card shadow p-0 m-0" style="max-width: 320px; min-width: 300px;">
                        <img src="assets/img/certifications/BD Relacionales con MySQL - TodoCode.webp" class="card-img-top" alt="imagen-certificado-bases-de-datos-mysql-todocode-academy" style="aspect-ratio: 16/9;">
                        <div class="card-body">
                            <h3 class="card-title">BD Relacionales con MySQL</h3>
                            <p class="card-text">En este curso desarrollé mis habilidades de nivel básico en MYSQL, el curso es impartido por la Ing. Luisina De Paula en la plataforma TodoCode Academy.</p>
                            <a class="icon-download" href="https://todocodeacademy.com/certificate/bd-relacionales-con-mysql-hon/" role="button">Ver</a>
                        </div>
                    </li>
                    <li class="col card shadow p-0 m-0" style="max-width: 320px; min-width: 300px;">
                        <img src="assets/img/certifications/Bases-de-datos-con-un-cafe.webp" class="card-img-top" alt="imagen-certificado-bases-de-datos-con-un-cafe-learning-linkedin" style="aspect-ratio: 16/9;">
                        <div class="card-body">
                            <h3 class="card-title">Bases de datos con un café</h3>
                            <p class="card-text">En este curso adquiri mis conocimientos de induccion a las bases de datos, sus tipos y donde utilizarlas, asi como a diseñarlas.</p>
                            <a class="icon-download" href="https://www.linkedin.com/learning/certificates/e411eea930c449d780517d9ec3aacbe110316f8d57957a3b1d80acc6a814f481?trk=share_certificate" role="button">Ver</a>
                        </div>
                    </li>
                    <li class="col card shadow p-0 m-0" style="max-width: 320px; min-width: 300px;">
                        <img src="assets/img/certifications/CertificadoGitGitHub.webp" class="card-img-top" alt="imagen-certificado-git-y-github-todocode-academy" style="aspect-ratio: 16/9;">
                        <div class="card-body">
                            <h3 class="card-title">Introduccion a Git y GitHub</h3>
                            <p class="card-text">En este curso desarrollé mis habilidades de nivel básico en Git, el curso es impartido por la Ing. Luisina De Paula en la plataforma TodoCode Academy.</p>
                            <a class="icon-download" href="https://todocodeacademy.com/certificate/mig/" role="button">Ver</a>
                        </div>
                    </li>
                    <li class="col card shadow p-0 m-0" style="max-width: 320px; min-width: 300px;">
                        <img src="assets/img/certifications/CertificadoC.webp" class="card-img-top" alt="imagen-certificado-c++-esemcial-learning-linkedin" style="aspect-ratio: 16/9;">
                        <div class="card-body">
                            <h3 class="card-title">Certificado C++ esencial</h3>
                            <p class="card-text">En este curso desarrollé mis habilidades de nivel básico en c++, el curso es impartido por el desarrollador Eliezer López y distribuido por LinkedIn Learning.</p>
                            <a class="icon-download" href="https://www.linkedin.com/learning/certificates/02fe8f837bdf9c613a51e8e14d37aeccdcee6bf01346b763b543f95925fc2955" role="button">Ver</a>
                        </div>
                    </li>
                    <li class="col card shadow p-0 m-0" style="max-width: 320px; min-width: 300px;">
                        <img src="assets/img/certifications/Machine-learning.webp" class="card-img-top" alt="imagen-certificado-machine-learning-con-un-cafe-learning-linkedin" style="aspect-ratio: 16/9;">
                        <div class="card-body">
                            <h3 class="card-title">Machine leraning con un cafe</h3>
                            <p class="card-text">En este curso adquiri conocimientos tecnicos sobre machine learning basico aplicable a las empresas</p>
                            <a class="icon-download" href="https://www.linkedin.com/learning/certificates/8c22b3fbfaa32b5f2a9f0a4c89a4eb74c4c1e7d61f89d5c8cac1f83bf8edea0a?trk=share_certificate" role="button">Ver</a>
                        </div>
                    </li>
                    <li class="col card shadow p-0 m-0" style="max-width: 320px; min-width: 300px;">
                        <img src="assets/img/certifications/Certificado-Python-santander.webp" class="card-img-top" alt="imagen-certificado-python-santander-academy" style="aspect-ratio: 16/9;">
                        <div class="card-body">
                            <h3 class="card-title">Python</h3>
                            <p class="card-text">En este curso adquiri conocimientos sobre Python desde la sintaxis basica hasta manipulación de documentos de texto</p>
                            <a class="icon-download" href="assets/img/certifications/Certificado-python.pdf" role="button">Ver</a>
                        </div>
                    </li>
                </ul>
            </aside>
        `;
    }
}

customElements.define('app-certificates', AppCertificates);