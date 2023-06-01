"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/userService"));
class UserController {
    constructor() {
        this.Register = async (req, res) => {
            console.log(req.body);
            let check = await userService_1.default.checkUserRegister(req.body);
            if (!check) {
                await userService_1.default.createUser(req.body);
                res.status(201).json("create successfully");
            }
            else {
                res.status(401).json("Account already exists");
            }
        };
        this.Login = async (req, res) => {
            let userData = req.body;
            let user = await userService_1.default.checkUser(userData);
            res.status(200).json(user);
        };
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map