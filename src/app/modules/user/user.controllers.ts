import { sendResponse } from './../../utils/sendRespons';
import { catchAsync } from '../../utils/catchAsync';

import { NextFunction, Request, Response } from "express";


import httpstatus from 'http-status-codes';
import { UserService } from "./user.service";





// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
     
    const user = await UserService.createUserService(req.body);
  
    sendResponse(res, {
        success: true,
        statusCode: httpstatus.CREATED,
        message: "User Created Successfully",
        data: user,
    })

})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAllUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
   

    const result = await UserService.getAllUserService();

    sendResponse(res, {
        success: true,
        statusCode: httpstatus.CREATED,
        message: "All Users Retrieved Successfully",
        data: result.data,
        meta: result.meta
    })

})



export const UserRouter = {
    createUser,
    getAllUser
}