import ContractController from "../controller/contractController";
import {Router} from "express";
import {auth} from "../middleware/auth";

const contractRouter =Router()

contractRouter.get("",ContractController.getAll)
contractRouter.get("/:id",ContractController.getcontractbyId)
contractRouter.put("/:id",ContractController.updateContractByClient)
contractRouter.post("/createContract",ContractController.addContractByClient)

export default contractRouter