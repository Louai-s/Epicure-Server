import { Request, Response } from "express";
import { DishesService } from "../services/dishes.service";

export class DishesController {
    public static async getDishes(req: Request, res: Response) {
    const service = new DishesService();
    const Dishes = await service.getDishes();
    return res.send(Dishes);
};

 public static async createDish(req: Request, res: Response) {
    const params = req.body;
    const service = new DishesService();
    const Dish = await service.createDish(params);
    return res.send(Dish);
};
};
