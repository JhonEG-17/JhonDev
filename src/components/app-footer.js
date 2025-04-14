class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer" aria-labelledby="footer-title">
            <div class="footer__content__copyright">
                <p>
                    <span class="footer__copyright__text">
                        &copy; ${new Date().getFullYear()} 
                        <a href="https://jegdevstudios.github.io/site/" class="text-dark" style="text-decoration: none;">JEG Dev Studios</a>
                    </span>
                </p>
            </div>
        </footer>
        `;
    }
}
  
customElements.define("app-footer", AppFooter);