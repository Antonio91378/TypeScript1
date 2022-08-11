import { Negociacao } from "./Negociacao.js";

export class Negociacoes {
  public Adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  public Lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }

  private negociacoes: Array<Negociacao> = [];
}

const negociacoes = new Negociacoes();
// negociacoes.adiciona(new Negociacao())
