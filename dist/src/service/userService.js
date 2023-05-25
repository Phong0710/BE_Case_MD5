"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../entity/user");
const data_source_1 = require("../data-source");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
class UserService {
    constructor() {
        this.checkUser = async (user) => {
            let checkUser = await this.userRepository.query(`select *
                                                        from user
                                                        where username = "${user.username}"`);
            let userFind = checkUser[0];
            console.log(userFind);
            if (userFind) {
                let pass = await bcrypt_1.default.compare(user.password, userFind.password);
                if (pass) {
                    let payload;
                    if (userFind.role === 1) {
                        payload = {
                            id: userFind.id,
                            username: userFind.username,
                            role: 1
                        };
                    }
                    else {
                        payload = {
                            id: userFind.id,
                            username: userFind.username,
                            role: 2
                        };
                    }
                    return jsonwebtoken_1.default.sign(payload, auth_1.SECRET, {
                        expiresIn: 3600 * 10 * 100
                    });
                }
                else {
                    return "wrong password";
                }
            }
            else {
                return "wrong username or password";
            }
        };
        this.createUser = async (user) => {
            let password = await bcrypt_1.default.hash(user.password, 10);
            let newUser = new user_1.User();
            newUser.name = user.name;
            newUser.phoneNumber = user.phoneNumber;
            newUser.address = user.address;
            newUser.username = user.username;
            newUser.password = password;
            newUser.role = user.role;
            await this.userRepository.save(newUser);
            return newUser;
        };
        this.checkUserRegister = async (user) => {
            let userFind = await this.userRepository.findOne({
                where: {
                    username: user.username
                }
            });
            return userFind;
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map