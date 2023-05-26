import {Router} from "express";
import {auth} from "../middleware/auth";
import userRouter from "./userRouter";
import houseRouter from "./houseRouter/houseRouter";
import contractRouter from "./ContractRouter";


const router = Router();
router.use('/users',userRouter);
router.use('/house',houseRouter)
router.use('/contract',contractRouter);
router.use('',userRouter);
router.use('/house',houseRouter)

export default router;