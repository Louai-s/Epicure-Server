import { ChefsDal } from "../dal/chefs.dal";
export class ChefsService {

public async getChefs() {
    const dal = new ChefsDal();
    const res = await dal.findAll();
    /*const res = [{
        PictureURL: "./assets/AsafGranit.svg",
        name: "Asaf Granit",
        chefStatus: ["All","Most Viewed","New"],
        Description: "",
        restaurants: [],  
    },
    
     {
        PictureURL: "./assets/AvivMoshe.svg",
        name: "Aviv Moshe",
        chefStatus: ["All","Most Viewed","New"],
        Description: "",
        restaurants: [],  
    },
    
     {
        PictureURL: "./assets/EyalShani.svg",
        name: "Eyal Shani",
        chefStatus: ["All","Most Viewed","New"],
        Description: "",
        restaurants: [],  
    },
    
    {
        PictureURL: "./assets/MeirAdoni.svg",
        name: "Meir Adoni",
        chefStatus: ["All","New"],
        Description: "",
        restaurants: [],  
    },
    
    {
        PictureURL: "./assets/OmerMiller.svg",
        name: "Omer Miller",
        chefStatus: ["All","New"],
        Description: "",
        restaurants: [],  
    },
    
    {
        PictureURL: "./assets/ShahafShabtay.svg",
        name: "Shahaf Shabtay",
        chefStatus: ["All","New"],
        Description: "",
        restaurants: [],  
    },
    
    {
        PictureURL: "./assets/NitzanRaz.svg",
        name: "Nitzan Raz",
        chefStatus: ["All"],
        Description: "",
        restaurants: [],  
    },
    
    {
        PictureURL: "./assets/ChefOfTheWeekImg.svg",
        name: "Yossi Shitrit",
        chefStatus: ["All"],
        Description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrits creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
    },
    
    {
        PictureURL: "./assets/YuvalBenNeriah.svg",
        name: "Yuval Ben Neriah",
        chefStatus: ["All"],
        Description: "",
        restaurants: [],  
    }
    ];*/
    return res;
};

public async createChef(chef:any) {
    const dal = new ChefsDal();
    const res = dal.createChef(chef);
    return res;
};

};