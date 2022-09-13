import mongoose from "mongoose";

const dishesSchema = new mongoose.Schema(
    {
        pictureURL: {
          type: String,
          required: true
        },
        name: {
            type: String,
            required: true
          },
        description: {
            type: String,
            required: true
          },
        dishType: {
            type: String,
            required: true
          },
        category: {
            type: String,
            required: true
          },
        price:{
            type: Number,
            required: true
          },
        signatureIcon:{
            type: String,
            required: true
          },
        restaurant:{
            type: String,
            required:true
          }
        }
        );

const Dishes = mongoose.model('Dishes', dishesSchema);
  
export default Dishes;     

