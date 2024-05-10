import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SandwichType from "../components/SandwichType";
import Sauce from "../components/Sauce";

export default class Sandwich{
    private _sandwichType: SandwichType;
    private _bread: Bread;
    private _protein: Protein;
    private _salads: Salad[] = [];
    private _sauces: Sauce[] = [];

    /**
     * Getter sandwichType
     * @return {SandwichType}
     */
	public get sandwichType(): SandwichType {
		return this._sandwichType;
	}

    /**
     * Getter bread
     * @return {Bread}
     */
	public get bread(): Bread {
		return this._bread;
	}

    /**
     * Getter protein
     * @return {Protein}
     */
	public get protein(): Protein {
		return this._protein;
	}

    /**
     * Getter salad
     * @return {Salad}
     */
	public get salads(): Salad[]  {
		return this._salads;
	}

    /**
     * Getter sauces
     * @return {Sauce[] }
     */
	public get sauces(): Sauce[]  {
		return this._sauces;
	}

    /**
     * Setter sandwichType
     * @param {SandwichType} value
     */
	public set sandwichType(value: SandwichType) {
		this._sandwichType = value;
	}

    /**
     * Setter bread
     * @param {Bread} value
     */
	public set bread(value: Bread) {
		this._bread = value;
	}

    /**
     * Setter protein
     * @param {Protein} value
     */
	public set protein(value: Protein) {
		this._protein = value;
	}

    /**
     * Setter salad
     * @param {Salad[] } value
     */
	public set salads(value: Salad[] ) {
		this.salads = value;
	}

    /**
     * Setter sauces
     * @param {Sauce[] } value
     */
	public set sauces(value: Sauce[] ) {
		this._sauces = value;
	}

    public addSalad(salad: Salad){
        this.salads.push(salad);
    }

    public addSauce(sauce: Sauce){
        this._sauces.push(sauce);
    }
}