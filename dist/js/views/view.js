export class View {
    constructor(selector) {
        this.elemento = document.querySelector(selector);
    }
    Update(model) {
        const template = this.Template(model);
        this.elemento.innerHTML = template;
    }
}
