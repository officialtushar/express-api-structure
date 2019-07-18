import User from '../models/user';
import { model } from 'mongoose';


var users = [
    {
      name: 'tushar'
    },
    {
      name: 'kumar'
    }
  ]

class UserController {

    constructor() {
    }

    getUsers() {
        return new Promise((resolve,reject) => {

          User.find().then((data) => {
            resolve(data);
          }).catch((error) => {
              reject(error);
          })

        })
    }

}

export default new UserController();
