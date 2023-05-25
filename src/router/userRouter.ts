import {Router} from "express";
import userController from "../controller/userController";

const userRouter = Router()

userRouter.post('/register',userController.Register)
userRouter.post('/login',userController.Login)

export  default userRouter