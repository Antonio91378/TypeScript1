export class Negociacao {
  constructor(
    private _data: Date,
    private _quantidade: number,
    private _valor: number
  ) {}

  get Data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }
  get Quantidade(): number {
    return this._quantidade;
  }
  get Valor(): number {
    return this._valor;
  }
  get Volume(): number {
    return this._quantidade * this._valor;
  }
  static CriaDe(
    dataString: string,
    quantidadeString: string,
    valorString: string
  ): Negociacao {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ","));
    const quentidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quentidade, valor);
  }
}
