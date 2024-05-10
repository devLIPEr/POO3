import Bread from "../../components/Bread";
import Protein from "../../components/Protein";
import Salad from "../../components/Salad";
import SandwichType from "../../components/SandwichType";
import Sauce from "../../components/Sauce";
import Sandwich from "../../products/Sandwich";

export default interface IBuilder{
    reset();
    getSandwich(): Sandwich;
    setSandwichType(sandwichType: SandwichType);
    setBread(bread: Bread);
    setProtein(protein: Protein);
    setSalads(salads: Salad[]);
    addSauce(sauce: Sauce);
    addSalad(salad: Salad);
}