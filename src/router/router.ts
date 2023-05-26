import {Router} from "express";
import {auth} from "../middleware/auth";
import userRouter from "./userRouter";
import houseRouter from "./houseRouter/houseRouter";
import contractRouter from "./ContractRouter";


const router = Router();
router.use('',userRouter);
router.use('/house',houseRouter)

router.use('/contract',contractRouter);
export default router;