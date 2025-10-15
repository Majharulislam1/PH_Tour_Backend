import   AppError   from '../../errorHelpers/AppError';
import   httpstatus   from 'http-status-codes';
 import bcryptjs from "bcryptjs";
import { IAuthProvider, IUser } from "./user.interface";
import { User } from "./user.models";


const createUserService = async (payload: Partial<IUser>) => {
    const { email, password, ...rest } = payload;
 
     
    const isUserExist = await User.findOne({ email })

    if (isUserExist) {
        throw new AppError(httpstatus.BAD_REQUEST, "User Already Exist")
    }
 const hashedPassword = await bcryptjs.hash(password as string, 10)
     const authProvider: IAuthProvider = { provider: "credentials", providerId: email as string }

   const user = await User.create({
        email,
        password:hashedPassword,
        auths: [authProvider],
        ...rest
    })

    return user
}


const getAllUserService = async () => {
    const users = await User.find();
    const totalUsers = await User.countDocuments();
    return {
        data: users,
        meta: {
            total: totalUsers
        }
    }

}




export const UserService = {
    createUserService,
    getAllUserService
}