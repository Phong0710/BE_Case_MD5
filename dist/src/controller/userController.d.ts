import { Request, Response } from 'express';
declare class UserController {
    Register: (req: Request, res: Response) => Promise<void>;
    Login: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UserController;
export default _default;
