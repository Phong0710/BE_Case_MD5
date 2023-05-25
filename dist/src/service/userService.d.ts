import { User } from "../entity/user";
declare class UserService {
    private userRepository;
    constructor();
    checkUser: (user: any) => Promise<string>;
    createUser: (user: any) => Promise<User>;
    checkUserRegister: (user: any) => Promise<any>;
}
declare const _default: UserService;
export default _default;
