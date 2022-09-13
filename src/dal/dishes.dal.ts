
import Dishes from "../db/models/Dish";

export class DishesDal {

    public createDish(dish: any) {
        dish = new Dishes({
          pictureURL:dish.pictureURL,
          name: dish.name,
          description: dish.description,
          dishType: dish.dishType,
          category: dish.category,
          price: dish.price,
          signatureIcon: dish.signatureIcon,
          restaurant: dish.restaurant
        });
        
        dish.save(function (err: any, results: any) {
          return results;
        });
    }

    public async updateChef(dish:any) {
      const data = await Dishes.findOne({
        name: dish.name,
      }).updateOne({$set: {age: dish.age,},})
        return data
      }


    public findAll(query: any = null) {
        return Dishes.find();
      }
}


