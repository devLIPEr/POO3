import IDrink from "../products/drinks/interfaces/IDrink";
import SoftDrink from "../products/drinks/SoftDrink";
import HotDog from "../products/foods/HotDog";
import IFood from "../products/foods/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class IFoodDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new SoftDrink();
    }
    createDeliveryFood(): IFood {
        return new HotDog();
    }
}