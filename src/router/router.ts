import {Router} from "express";
import {auth} from "../middleware/auth";
import userRouter from "./userRouter";
import houseRouter from "./houseRouter/houseRouter";


const router = Router();
router.use('',userRouter);
router.use('/house',houseRouter)

export default router;