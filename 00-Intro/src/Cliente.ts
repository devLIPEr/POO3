import { Endereco } from "./Endereco";
import { Telefone } from "./Telefone";

export class Cliente{
    private _nome : string;
    private _cpf : number;
    private _dataNascimento : number;
    private _sexo : string;
    private _endereco : Endereco;
    private _telefones : Telefone[];

	constructor(nome: string, cpf: number, dataNascimento: number, sexo: string, endereco: Endereco, telefones: Telefone[]) {
		this._nome = nome;
		this._cpf = cpf;
		this._dataNascimento = dataNascimento;
		this._sexo = sexo;
		this._endereco = endereco;
		this._telefones = telefones;
	}

    /**
     * Getter nome
     * @return {string}
     */
	public get nome(): string {
		return this._nome;
	}

    /**
     * Getter cpf
     * @return {number}
     */
	public get cpf(): number {
		return this._cpf;
	}

    /**
     * Getter dataNascimento
     * @return {number}
     */
	public get dataNascimento(): number {
		return this._dataNascimento;
	}

    /**
     * Getter sexo
     * @return {string}
     */
	public get sexo(): string {
		return this._sexo;
	}

    /**
     * Getter endereco
     * @return {Endereco}
     */
	public get endereco(): Endereco {
		return this._endereco;
	}

    /**
     * Getter telefones
     * @return {Telefone[]}
     */
	public get telefones(): Telefone[] {
		return this._telefones;
	}

    /**
     * Setter nome
     * @param {string} value
     */
	public set nome(value: string) {
		this._nome = value;
	}

    /**
     * Setter cpf
     * @param {number} value
     */
	public set cpf(value: number) {
		this._cpf = value;
	}

    /**
     * Setter dataNascimento
     * @param {number} value
     */
	public set dataNascimento(value: number) {
		this._dataNascimento = value;
	}

    /**
     * Setter sexo
     * @param {string} value
     */
	public set sexo(value: string) {
		this._sexo = value;
	}

    /**
     * Setter endereco
     * @param {Endereco} value
     */
	public set endereco(value: Endereco) {
		this._endereco = value;
	}

    /**
     * Setter telefones
     * @param {Telefone[]} value
     */
	public set telefones(value: Telefone[]) {
		this._telefones = value;
	}
}