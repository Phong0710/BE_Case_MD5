import ContractController from "../controller/contractController";
import {Router} from "express";
import {auth} from "../middleware/auth";

const contractRouter =Router()

contractRouter.get("",auth,ContractController.getContractByIdUser)
contractRouter.put("/:id",ContractController.updateContractByClient)
contractRouter.post("/",ContractController.addContractByClient)

export default contractRouter