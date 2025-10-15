import { Router } from 'express';
import { User_Routes } from '../modules/user/user.routes';
import { AuthRoutes } from '../modules/auths/auth.routes';



export const router = Router();



const modulerRoutes = [

     {
         path:"/user",
         route:User_Routes
     },
     {
         path:"/auth",
         route:AuthRoutes
     }

]

modulerRoutes.forEach((route)=>{
     router.use(route.path,route.route);
})

