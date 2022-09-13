import mongoose from "mongoose";

const connectDb = async () => {
await mongoose.connect("mongodb+srv://Louai:louai123@cluster0.q499akg.mongodb.net/EpicureDB")
.then(() => {
    console.log('Connected to DB..');
  });
};
export { connectDb }