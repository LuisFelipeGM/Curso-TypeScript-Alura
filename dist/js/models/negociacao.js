export class Negociacao {
    // Se passar o modificador de acesso no construtor, o TS vai criar as propriedades com base nos nomes dos parametros do construtor!
    // É outra abordagem diferente do que se é usado no Java por exemplo
    // Como somente fizemos os getters das propriedades podemos ter a abordagem de deixar public e adicionar o readonly, após criação só é permitido fazer a leitura
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
}
