import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.mensagemView = new MensagemView("#mensagemView");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.Update(this.negociacoes);
    }
    Adiciona() {
        const negociacao = this.CriaNegociacao();
        this.negociacoes.Adiciona(negociacao);
        this.negociacoesView.Update(this.negociacoes);
        this.mensagemView.Update("Negociacao adicionada com sucesso");
        console.log(this.negociacoes.Lista());
        this.LimparFormulario();
    }
    CriaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ","));
        const quentidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quentidade, valor);
    }
    LimparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}
