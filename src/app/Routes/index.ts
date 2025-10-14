import { Router } from 'express';
import { User_Routes } from '../modules/user/user.routes';



export const router = Router();



const modulerRoutes = [

     {
         path:"/user",
         route:User_Routes
     }

]

modulerRoutes.forEach((route)=>{
     router.use(route.path,route.route);
})

