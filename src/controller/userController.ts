import {Request, Response} from "express";
import userService from "../service/userService";
const session = require('express-session');

class UserController {

    private userService;
    constructor() {
        this.userService = userService;
    }

    register = async (req: Request, res: Response) => {
        console.log(req.body)
        await this.userService.register(req.body);
        res.status(201).json('Create user success')
    }

    login = async (req: Request, res: Response) => {
        let resultCheck = await this.userService.checkUser(req.body);
        res.status(200).json(resultCheck);
    }

}

export default new UserController();