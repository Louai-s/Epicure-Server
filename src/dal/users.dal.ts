import Users from "../db/models/User";



export class UsersDal {

    public createUser(user: any) {
        user = new Users({
          Email:user.Email,
          Password: user.Password
        });
        
        user.save(function (err: any, results: any) {
          return results;
        });
        
    }


    public findAll(query: any = null) {
        return Users.find();
      }
}
