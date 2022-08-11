import { Negociacoes } from "../models/Negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {
  protected Template(model: Negociacoes): string {
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
                            <th>${this.Formatar(negociacao.Data)}</th>
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

  private Formatar(data: Date): string {
    return new Intl.DateTimeFormat().format(data);
  }
}
