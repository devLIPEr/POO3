import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SandwichType from "../components/SandwichType";
import Sauce from "../components/Sauce";
import Sandwich from "../products/Sandwich";
import IBuilder from "./interfaces/IBuilder";

export default class SandwichBuilder implements IBuilder{
    private _sandwich: Sandwich = new Sandwich();

    reset() {
        this._sandwich = new Sandwich();
    }
    getSandwich(): Sandwich {
        const result = this._sandwich;
        this.reset();
        return result;
    }
    setSandwichType(sandwichType: SandwichType) {
        this._sandwich.sandwichType = sandwichType;
    }
    setBread(bread: Bread) {
        this._sandwich.bread = bread;
    }
    setProtein(protein: Protein) {
        this._sandwich.protein = protein;
    }
    setSalads(salads: Salad[]) {
        this._sandwich.salads = salads;
    }
    addSauce(sauce: Sauce) {
        this._sandwich.addSauce(sauce);
    }
    addSalad(salad: Salad) {
        this._sandwich.addSalad(salad);
    }
}