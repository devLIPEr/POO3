import IDelivetyFactory from "../deliveries/interfaces/IDeliveryFactory";
import IDrink from "../products/drinks/interfaces/IDrink";
import IFood from "../products/foods/interfaces/IFood";

export default class Client{
    private drink: IDrink;
    private food: IFood;

    constructor(factory: IDelivetyFactory){
        this.drink = factory.createDeliveryDrink();
        this.food = factory.createDeliveryFood();
    }

    startDelivery(hasDrink: boolean, hasFood: boolean){
        if(hasDrink){
            this.drink.startDelivery();
        }
        if(hasFood){
            this.food.startDelivery();
        }
    }
}