import {Router} from "express";
import {auth} from "../middleware/auth";
import userRouter from "./userRouter";
import houseRouter from "./houseRouter/houseRouter";
import contractRouter from "./ContractRouter";
import houseController from "../controller/houseController";


const router = Router();
router.use('',userRouter);
router.use('/house',houseRouter)

router.use('/contract',contractRouter);
router.get('/district', houseController.getDistris)
router.get('/wards/:id', houseController.getWards)
export default router;

