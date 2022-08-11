import { DiasDaSemana } from "../enums/DiasDaSemana.js";
import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes: Negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoesView");
  private mensagemView = new MensagemView("#mensagemView");

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
    this.negociacoesView.Update(this.negociacoes);
  }
  public Adiciona(): void {
    const negociacao = Negociacao.CriaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );
    if (!this.EhDiaUtil(negociacao.Data)) {
      this.mensagemView.Update(
        "Negociações apenas são permitidas em dias úteis."
      );
      return;
    }
    this.negociacoes.Adiciona(negociacao);
    this.AtualizaView();
    console.log(this.negociacoes.Lista());
    this.LimparFormulario();
  }
  private EhDiaUtil(date: Date) {
    return (
      date.getDay() > DiasDaSemana.DOMINGO &&
      date.getDay() < DiasDaSemana.SABADO
    );
  }

  private LimparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  private AtualizaView(): void {
    this.negociacoesView.Update(this.negociacoes);
    this.mensagemView.Update("Negociacao adicionada com sucesso");
  }
}
