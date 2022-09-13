import mongoose from "mongoose";

const restaurantsSchema = new mongoose.Schema(
    {
        pictureURL: {
          type: String,
          required: true
        },
        name: {
            type: String,
            required: true
          },
          establishedDate: {
            type: Date,
            required: true
          },
          chef: {
            type: String,
            required: true
          },
          openingHours: {
            type:[],
            required: true
          },
          dishes:{
            type:[],
            required: true
          },
          status:{
            type:[],
            required:true
          },
          stars:{
            type: String,
            required:true
          }
        }
        );

const Restaurants = mongoose.model('Restaurants', restaurantsSchema);
  
export default Restaurants;     
