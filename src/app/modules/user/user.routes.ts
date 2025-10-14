


import { Router } from "express";
import { UserRouter } from "./user.controllers";
 


export const User_Routes = Router()

User_Routes.post("/register",UserRouter.createUser);
User_Routes.get('/',UserRouter.getAllUser);
 

 