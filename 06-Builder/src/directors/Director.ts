import IBuilder from "../builders/interfaces/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SandwichType from "../components/SandwichType";
import Sauce from "../components/Sauce";

export default class Director{
    constructor(private _builder: IBuilder){}

    constructHotDog(){
        this._builder.setSandwichType(SandwichType.HOT_DOG);
        this._builder.setBread(Bread.HOT_DOG);
        this._builder.setProtein(Protein.SALSICHA);
        this._builder.addSauce(Sauce.KETCHUP);
        this._builder.addSauce(Sauce.MAIONESE);
    }

    constructXSalada(){
        this._builder.setSandwichType(SandwichType.XIS_SALADA);
        this._builder.setBread(Bread.PAO_DE_HAMBURGUER);
        this._builder.addSalad(Salad.ALFACE);
        this._builder.addSalad(Salad.TOMATE);
        this._builder.addSalad(Salad.CEBOLA);
        this._builder.addSauce(Sauce.MAIONESE_VERDE);
        this._builder.addSauce(Sauce.ROSE);
    }
}