export class MensagemView {
  private element: HTMLElement;
  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }

  Template(model: String): string {
    return `
        <p class="alert alert-info">${model}</p>
    `;
  }

  Update(model: String): void {
    const template = this.Template(model);
    this.element.innerHTML = template;
  }
}
