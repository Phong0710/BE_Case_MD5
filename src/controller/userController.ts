import {Request,Response} from 'express'
import userService from "../service/userService";

class UserController{
    Register = async(req: Request, res: Response)=>{
        console.log(req.body)
        let check = await userService.checkUserRegister(req.body)
        if(!check){
             await userService.createUser(req.body)
            res.status(201).json("create successfully")
        }else{
            res.status(401).json("Account already exists")
        }
    }
    Login = async(req: Request, res: Response)=>{
        let userData = req.body;
        let user = await userService.checkUser(userData)
            res.status(200).json(user)

    }
}

export default new UserController();
