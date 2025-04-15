class AppPortfolio extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section id="portfolio" class="section-portfolio">
            <h2 class="__portfolio-title">Portafolio</h2>
            <article class="__portfolio-articles">
                <div class="__portfolio-card">
                    <img src="src/assets/img/proyects/proyects-img/CalculFisc.webp" class="__card-img" alt="Proyecto 1">
                    <div class="__card-body">
                        <h3 class="__card-title">CalCulFisc</h3>
                        <p class="__card-text">Este proyecto es una herramienta para los empleados que deseen revisar o calcular el ISR retenido de su salario para el pago de impuestos.</p>
                    </div>
                    <div class="__card-links">
                        <a class="__card-link __bg-black icon-github" href="https://github.com/JhonEG-17/CalculFisc-Web" role="button" target="blank" rel="noreferrer" aria-label="link-github" aria-labelledby="link-github"></a>
                        <a class="__card-link __bg-white icon-new-tab" href="https://jhoneg-17.github.io/CalculFisc-Web/" role="button" target="blank" rel="noreferrer" aria-label="link-site" aria-labelledby="link-site"></a>
                    </div>
                </div>
                <div class="__portfolio-card">
                    <img src="src/assets/img/proyects/proyects-img/JEGDEVSTUDIOS.webp" class="__card-img" alt="Proyecto 2">
                    <div class="__card-body">
                        <h3 class="__card-title">JEGDevStudios WEB</h3>
                        <p class="__card-text">Este es un sitio web creado para mí para poder manejar los pedidos de mis clientes y poder llevar un mejor registro de los mismos.</p>
                    </div>
                    <div class="__card-links">
                        <a class="__card-link __bg-black icon-github" href="https://github.com/JEGDevStudios/site" role="button"></a>
                        <a class="__card-link __bg-white icon-new-tab" href="https://jegdevstudios.github.io/site" role="button" target="blank" rel="noreferrer" aria-label="link-site" aria-labelledby="link-site"></a>
                    </div>
                </div>
            </article>
        </section>
    `;
  }
}

customElements.define("app-portfolio", AppPortfolio);
