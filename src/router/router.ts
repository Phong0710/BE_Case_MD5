import {Router} from "express";
import {auth} from "../middleware/auth";
import userRouter from "./userRouter";


const router = Router();
router.use('/users',userRouter);

export default router;