import {Request,Response} from 'express'
import userService from "../service/userService";

class UserController{

    Register = async(req: Request, res: Response)=>{
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
        if (user.payload){
            res.status(200).json(user)
        }else {
            res.status(400).json({
                massage:" login false"
            })
        }

    }
}
export default new UserController();
