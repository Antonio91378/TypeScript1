import { Negociacao } from "./Negociacao.js";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

  Adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  Lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }
}

const negociacoes = new Negociacoes();
// negociacoes.adiciona(new Negociacao())
