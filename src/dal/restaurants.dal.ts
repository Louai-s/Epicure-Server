import Restaurants from "../db/models/Restaurant";

export class RestaurantsDal {

    public createRestaurant(restaurant: any) {
        restaurant = new Restaurants({
          pictureURL: restaurant.pictureURL,
          name: restaurant.name,
          establishedDate: restaurant.establishedDate,
          chef: restaurant.chef,
          openingHours: restaurant.openingHours,
          dishes:restaurant.dishes,
          status:restaurant.status,
          stars: restaurant.stars
        });

        restaurant.save(function (err: any, results: any) {
          return results;
        });
    }

    public async updateRestaurant(restaurant:any) {
      await Restaurants.findOne({
        name: restaurant.name,
      }).updateOne({$set: {chef: restaurant.chef,}});
        const updatedRestaurants = await Restaurants.find();
        return updatedRestaurants;
    }


    public findAll() {
        return Restaurants.find();
    }
}


