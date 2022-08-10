import { Negociacoes } from "../models/Negociacoes.js";

export class NegociacoesView {
  private elemento: HTMLElement;
  constructor(selector: string) {
    this.elemento = document.querySelector(selector);
  }
  Template(model: Negociacoes): string {
    return `
        <table class="table table-hover table-bordered"
            <thead>
                <tr>
                    <td>DATA</td>
                    <td>QUANTIDADE</td>
                    <td>VALOR</td>
                </tr>
            </thead>
            <tbody>
                ${model
                  .Lista()
                  .map((negociacao) => {
                    return `
                        <tr>
                            <th>${new Intl.DateTimeFormat().format(
                              negociacao.Data
                            )}</th>
                            <th>${negociacao.Quantidade}</th>
                            <th>${negociacao.Valor}</th>
                        </tr>
                    `;
                  })
                  .join(" ")}
            </tbody>
        </table>
        `;
  }
  Update(model: Negociacoes): void {
    const template = this.Template(model);
    console.log(template);
    this.elemento.innerHTML = template;
  }
}
