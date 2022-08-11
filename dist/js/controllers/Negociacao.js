import { DiasDaSemana } from "../enums/DiasDaSemana.js";
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
        const negociacaoTemp = new Negociacao(null, 0, 0);
        const negociacao = negociacaoTemp.CriaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.EhDiaUtil(negociacao.Data)) {
            this.mensagemView.Update("Negociações apenas são permitidas em dias úteis.");
            return;
        }
        this.negociacoes.Adiciona(negociacao);
        this.AtualizaView();
        console.log(this.negociacoes.Lista());
        this.LimparFormulario();
    }
    EhDiaUtil(date) {
        return (date.getDay() > DiasDaSemana.DOMINGO &&
            date.getDay() < DiasDaSemana.SABADO);
    }
    LimparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
    AtualizaView() {
        this.negociacoesView.Update(this.negociacoes);
        this.mensagemView.Update("Negociacao adicionada com sucesso");
    }
}
