export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    Adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    Lista() {
        return this.negociacoes;
    }
}
const negociacoes = new Negociacoes();
// negociacoes.adiciona(new Negociacao())
