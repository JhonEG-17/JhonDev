import "../components/app-card-about-me.js";
import "../components/app-card-experience.js";
import "../components/app-portfolio.js";
import "../components/app-slider-certificates.js";

class appAboutMe extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <section id="about" class="section-about">

                <app-card-about-me></app-card-about-me>
                
                <app-card-experience></app-card-experience>
                
                <app-portfolio></app-portfolio>

                <app-slider-certificates></app-slider-certificates>

            </section>
        `;
    }
}
  
customElements.define("app-about-me", appAboutMe);