import ContractController from "../controller/contractController";
import {Router} from "express";
import {auth} from "../middleware/auth";

const contractRouter =Router()
contractRouter.use(auth)
contractRouter.get("",ContractController.getContractByIdUser)
contractRouter.put("/:id",ContractController.updateContractByClient)
contractRouter.post("/",ContractController.addContractByClient)

export default contractRouter