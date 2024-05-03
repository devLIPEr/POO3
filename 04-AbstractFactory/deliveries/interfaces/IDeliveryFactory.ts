import IDrink from "../../products/drinks/interfaces/IDrink";
import IFood from "../../products/foods/interfaces/IFood";

export default interface IDelivetyFactory{
    createDeliveryDrink(): IDrink;
    createDeliveryFood(): IFood;
}