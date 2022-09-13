import mongoose from "mongoose";
const usersSchema = new mongoose.Schema(
    {
        Email: {
          type: String,
          required: true
        },
        Password: {
            type: String,
            required: true
          }
         }
          );
  
  const Users = mongoose.model('Users', usersSchema);
    
  export default Users;   