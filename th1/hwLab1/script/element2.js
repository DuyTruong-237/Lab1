class SquareCheck extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <style>
            .squareC {
                height: 15px;
                width: 15px;
                border: 2px solid lightseagreen;
            }
        </style>
        <body>
            <div class="squareC"></div>
        </body>`;
    }
}

customElements.define('square-check-box', SquareCheck);