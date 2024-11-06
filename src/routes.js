//const {Router} = require('express')
import {Router} from 'express'
const routes =new Router()


import { password } from './config/database';
import UserController from './app/controllers/UserControllers';

routes.post('/users',UserController.store);
  

    //return response.status(201).json(user);
    //return response.status(200).json ({message: 'Hello World!'})

module.exports = routes
//export default routes