


import { Router } from "express";
import { UserRouter } from "./user.controllers";
import { validateRequest } from "../../middlewares/validateRequest";
import { createUserZodSchema } from "./user.validation";
 


export const User_Routes = Router()

User_Routes.post("/register", validateRequest(createUserZodSchema) ,UserRouter.createUser);
User_Routes.get('/',UserRouter.getAllUser);
 

 