export class MensagemView {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    Template(model) {
        return `
        <p class="alert alert-info">${model}</p>
    `;
    }
    Update(model) {
        const template = this.Template(model);
        this.element.innerHTML = template;
    }
}
