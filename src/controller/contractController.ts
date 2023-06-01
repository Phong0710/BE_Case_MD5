import {Request,Response} from "express";
import ContractService from "../service/contractService";
import houseService from "../service/houseService";
import contractService from "../service/contractService";

class ContractController{

    getContractByIdUser = async (req: Request, res: Response) => {
        let id = req["decode"].id
        let contract = await ContractService.getContractByUserId(id);
       if (contract===null){
           res.status(201).json({
               message:'You are anonymous'
           });
       }else {
           res.status(201).json(contract

           );
       }
    }
    updateContractByClient = async(req:Request, res: Response) => {
        let idContract = req.params.id
        let contract = await contractService.updateContractByClient(parseInt(idContract),req.body)
        res.status(200).json(contract);
    }
    addContractByClient = async(req:Request, res:Response)=>{
        console.log(req.body)
        let userId = req["decode"].id
        let houseId = req.body.houseId;
        let house = await houseService.findHouseById(houseId)
        let price:number = house.price
        let startMonth =req.body.startMonth
        let endMonth = req.body.endMonth
        let days:number =this.calculatorOfTheMonth(startMonth,endMonth)
        let cost = price*days
        await contractService.addContractByClient(houseId,req.body,cost,parseInt(userId),price)
        res.status(200).json("thêm hợp đồng thành công")
    }
    calculatorOfTheMonth = (startMonth, endMonth) => {
        const startDate = new Date(startMonth);
        const endDate = new Date(endMonth);
        const delta:number = (endDate.getTime() - startDate.getTime()) / (86400000) + 1;
        return delta <= 0?0: delta
    }
}
export default new ContractController()
