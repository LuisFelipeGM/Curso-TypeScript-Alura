import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    // Para a declaração do tipo ambas as formas tem o mesmo resultado:
    // Array<Negociacao> == Negociacao[];
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    // Mesma coisa para esse tipo ReadonlyArray:
    // ReadonlyArray<Negociacao> == readonly Negociacao[]
    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}