    import {User} from "../entity/user";
import {AppDataSource} from "../data-source";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import {SECRET} from "../middleware/auth";
import userController from "../controller/userController";

class UserService {
    private userRepository

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }


    checkUser = async (user)=>{
        let checkUser = await this.userRepository.query(`select *
                                                        from user
                                                        where username = "${user.username}"`)

        let userFind = checkUser[0]
        if(userFind){
            let pass = await bcrypt.compare(user.password,userFind.password)
            if(pass){
                let payload;
                if(userFind.role=== 1){
                    payload = {
                        id:userFind.id,
                        name:userFind.name,
                        username :userFind.username,
                        role:1
                    }
                }else{
                    payload = {
                        id:userFind.id,
                        username :userFind.username,
                        role:2
                    }
                }
                let token = jwt.sign(payload,SECRET,{
                    expiresIn:3600*10*100
                })
                payload['token']= token
                return payload
            }else{
                return "wrong password"
            }
        }else{
            return "wrong username or password"
        }
    }

    createUser = async (user)=>{
        let password = await bcrypt.hash(user.password,10)
        let newUser = new User()
        newUser.name = user.name;
        newUser.phoneNumber = user.phoneNumber;
        newUser.address = user.address;
        newUser.username = user.username;
        newUser.password = password;
        newUser.role = user.role;
        await this.userRepository.save(newUser)
        return newUser


    }
    checkUserRegister = async (user)=>{
        let userFind = await this.userRepository.findOne({
            where: {
                username: user.username
            }
        })
        return userFind
    }
}

export default new UserService();
