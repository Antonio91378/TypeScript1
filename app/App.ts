import { NegociacaoController } from "./controllers/Negociacao.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  controller.Adiciona();
});
