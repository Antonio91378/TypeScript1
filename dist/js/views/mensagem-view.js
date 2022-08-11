import { View } from "./view.js";
export class MensagemView extends View {
    Template(model) {
        return `
        <p class="alert alert-info">${model}</p>
    `;
    }
}
