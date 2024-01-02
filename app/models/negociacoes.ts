import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    // Para a declaração do tipo ambas as formas tem o mesmo resultado:
    // Array<Negociacao> == Negociacao[];
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    // Mesma coisa para esse tipo ReadonlyArray:
    // ReadonlyArray<Negociacao> == readonly Negociacao[]
    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}