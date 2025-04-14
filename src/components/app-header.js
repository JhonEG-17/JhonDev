import './app-skills-slider.js';

class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="text-light" style="height: 650px;">
                <img src="src/assets/img/Background/Background-min.webp" alt="" style="width: 100%; height: 100%; object-fit: cover;">
                <div class="card-img-overlay d-flex flex-column p-5">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex pt-3 gap-3">
                            <div class="social-item">
                                <a class="social-link text-light h3 icon-linkedin-bg-white" href="https://www.linkedin.com/in/jhoneg
            
                                " target="_blank" style="box-shadow: 0 2px 10px #000;"></a>
                            </div>
                            <div class="social-item">
                                <a class="social-link text-light h3 icon-github" href="https://github.com/JhonEG-17" target="_blank" style="box-shadow: 0 2px 10px #000;"></a>
                            </div>
                        </div>
                        <button id="toggleDarkMode" class="btn btn-dark shadow rounded-circle" style=" box-shadow: 0 2px 10px #000; ">🌙</button>
                    </div>
                    <div class="header-content pt-5">
                        <h4 class="header-subtitle lh-lg shadow" style="font-size: 3vw; text-shadow: 0 2px 10px #000;">Hola, soy</h4>
                        <h1 class="header-title fw-bold" style="font-size: 8vw; text-shadow: 0 2px 10px #000;">Jhonatan Espinal</h1>
                        <h6 class="header-mono lh-lg" style="font-size: 1.5vw; text-shadow: 0 2px 10px #000;">Desarrollador Web | Diseñador Frontend</h6>
                        <div class="m-0 pb-3 grid gap-3" style="width: 100%;">
                            <app-skills-slider></app-skills-slider>
                        </div>
                        <a href="../assets/files/Jhonatan-Espinal-Garcia-CV.pdf" type="button" class="btn btn btn-light icon-new-tab" target="_blank" role="button" rel="noopener noreferrer" aria-label="Download CV" aria-labelledby="button donwload-cv"> Descargar CV</a>
                    </div>
                </div>
            </header>
        `;
    }
}
  
customElements.define("app-header", AppHeader);