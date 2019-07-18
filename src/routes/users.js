
import express from 'express';
import UserController from '../controllers/users';


class User {

  router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }


  getUsers(req,res) {

    UserController.getUsers().then((data) => {
      res.json(data);
    }).catch(error => {
      console.log('error is :', error);
    })
  }


  routes() {
    /* GET users listing. */
    this.router.get('/all/users', this.getUsers);
    
  }
}


export default new User().router;
