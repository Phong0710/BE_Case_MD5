import {Router} from "express";
import {auth} from "../middleware/auth";
import houserRouter from "./houserRouter/houserRouter";


const router = Router();
router.use('/user',houserRouter)
export default router;