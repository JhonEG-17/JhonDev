class AppContact extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="contact" class="container my-5">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3  gap-3 justify-content-evenly align-items-center">
                    <div class="col contact-form-card shadow bg-white rounded border-0 p-3 text-dark" style="width: 320px;">
                        <h4 class="contact-title">Envíame un correo</h4>
                        <form  method="post">
                            <div class="form-group">
                                <input  class="form-control" type="text" placeholder="Nombre *" required>
                            </div>
                            <div class="form-group">
                                <input class="form-control" type="email" placeholder="Correo *" required>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" id=" placeholder="Mensaje *" rows="7" required></textarea>
                            </div>
                            <div class="form-group ">
                                <button type="submit" class="form-control btn btn-primary" >Envíar mensaje</button>
                            </div>
                        </form>
                    </div>
                    <div class="col text-center p-4">
                        <p class="h1">Ó</p>
                    </div>
                    <div class="col p-3 shadow bg-white rounded border-0 text-dark" style="width: 320px; height: 100%;">
                        <div class="d-flex flex-column gap-3">
                            <h3 class="text-center">Contactame mediante mis redes</h3>
                            <div class="d-flex justify-content-evenly">
                                <div class="social-item">
                                    <a class="social-link text-dark icon-linkedin-bg-black" href="https://www.linkedin.com/in/jhoneg
                
                                    " target="_blank">
                                    </a>
                                </div>
                                <div class="social-item">
                                    <a class="social-link text-dark icon-github" href="https://github.com/JhonEG-17" target="_blank">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('app-contact', ApppContact);