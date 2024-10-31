export class ContentComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" })
        this.#agregarEstilos(shadow)
        this.#render(shadow)
    }

    #render(shadow) {
        shadow.innerHTML += `
            <section>
                <h2>MicroFrontend content</h2>
                <p>MicroFrontend paragraph content</p>
            </section>
        `
    }

    #agregarEstilos(shadow) {
        let link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', './content/content.css');
        shadow.appendChild(link)
    }
}