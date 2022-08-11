export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(selector: string) {
    this.elemento = document.querySelector(selector);
  }

  protected abstract Template(model: T): string;

  public Update(model: T): void {
    const template = this.Template(model);
    this.elemento.innerHTML = template;
  }
}
