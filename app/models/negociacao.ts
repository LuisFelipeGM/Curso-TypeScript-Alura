export class Negociacao {

    // Se passar o modificador de acesso no construtor, o TS vai criar as propriedades com base nos nomes dos parametros do construtor!
    // É outra abordagem diferente do que se é usado no Java por exemplo
    // Como somente fizemos os getters das propriedades podemos ter a abordagem de deixar public e adicionar o readonly, após criação só é permitido fazer a leitura
    constructor(
        private readonly _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) { }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        let exp = /-/g
        let date = new Date(dataString.replace(exp, ','));
        let quantidade = parseInt(quantidadeString);
        let valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}