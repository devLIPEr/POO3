import Beer from "../products/drinks/Beer";
import IDrink from "../products/drinks/interfaces/IDrink";
import Hamburguer from "../products/foods/Hamburguer";
import IFood from "../products/foods/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class AiqfomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new Beer();
    }
    createDeliveryFood(): IFood {
        return new Hamburguer();
    }
}