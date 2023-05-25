import {Router} from "express";
import houseRouter from "./houserRouter/houserRouter";



const router = Router();
router.use('/user',houseRouter)
export default router;