export class Negociacoes {
    constructor() {
        // Para a declaração do tipo ambas as formas tem o mesmo resultado:
        // Array<Negociacao> == Negociacao[];
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // Mesma coisa para esse tipo ReadonlyArray:
    // ReadonlyArray<Negociacao> == readonly Negociacao[]
    lista() {
        return this.negociacoes;
    }
}
