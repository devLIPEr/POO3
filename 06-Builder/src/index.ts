import IBuilder from "./builders/interfaces/IBuilder";
import SandwichBuilder from "./builders/SandwichBuilder";
import Director from "./directors/Director";
import Sandwich from "./products/Sandwich";

function printDetails(sandwich: Sandwich){
    console.log("Fabricando " + sandwich.sandwichType);
    console.log("   Tipo de pão: " + sandwich.bread);
    if(sandwich.protein){
        console.log("   Tipo de proteína: " + sandwich.protein);
    }
    if(sandwich.salads.length > 0){
        let salads: string = "";
        sandwich.salads.forEach(salad => salads += salad + ", ");
        salads = salads.substring(0, salads.length-2);
        console.log("   Saladas: " + salads);
    }
    if(sandwich.sauces.length > 0){
        let sauces: string = "";
        sandwich.sauces.forEach(sauce => sauces += sauce + ", ");
        sauces = sauces.substring(0, sauces.length-2);
        console.log("   Molhos: " + sauces);
    }
    console.log("");
}

const builder: IBuilder = new SandwichBuilder();
const director: Director = new Director(builder);

director.constructHotDog();
const hotDog = builder.getSandwich();
printDetails(hotDog);

director.constructXSalada();
const xSalada = builder.getSandwich();
printDetails(xSalada);