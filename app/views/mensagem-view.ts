import { View } from "./view.js";

export class MensagemView extends View<string> {
  protected Template(model: String): string {
    return `
        <p class="alert alert-info">${model}</p>
    `;
  }
}
