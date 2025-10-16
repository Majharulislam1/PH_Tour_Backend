


import { Router } from "express";
import { UserRouter } from "./user.controllers";
import { validateRequest } from "../../middlewares/validateRequest";
import { createUserZodSchema } from "./user.validation";


import { checkAuths } from "../../middlewares/checkAuths";



export const User_Routes = Router()



User_Routes.post("/register", validateRequest(createUserZodSchema), UserRouter.createUser);
User_Routes.get('/', checkAuths('ADMIN','SUPER_ADMIN'), UserRouter.getAllUser);


