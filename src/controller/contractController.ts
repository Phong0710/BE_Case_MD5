import {Request,Response} from "express";
import ContractService from "../service/contractService";
import houseService from "../service/houseService";
import contractService from "../service/contractService";

class ContractController{

    getContractByIdUser = async (req: Request, res: Response) => {
        let id = req["decode"].id
        let contract = await ContractService.getContractByUserId(id);
        res.status(201).json(contract);
    }
    getcontractbyId = async (req: Request, res: Response) => {
        let id= req.params.id
        let contract = await contractService.getContractByID(id)
        res.status(200).json(contract);
    }
    getAll = async(req:Request, res: Response) => {
        let contract = await contractService.showAll()
        res.status(200).json(contract);
    }
    updateContractByClient = async(req:Request, res: Response) => {
        let idContract = req.params.id
        let contract = await contractService.updateContractByClient(parseInt(idContract),req.body)
        res.status(200).json(contract);
    }
    addContractByClient = async(req:Request, res:Response)=>{
        let userId = req["decode"].id
        let houseId = req.body.houseId;
        let house = await houseService.findHouseById(houseId)
        let price:number = house.price
        let startmonth =req.body.startMonth
        let endmonth = req.body.endMonth
        let month:number =this.caculatoOfTheMonth(startmonth,endmonth)
        let cost = price*month
        await contractService.addContractByClient(houseId,req.body,cost,parseInt(userId),price)
        res.status(200).json("thêm hợp đồng thành công")
    }
    caculatoOfTheMonth = (startmonth,endmonth) => {
        let month1 = new Date(startmonth)
        let month2 = new Date(endmonth)
        let numberOfMonths=(month2.getFullYear()-month1.getFullYear()*12)
        numberOfMonths -= month1.getMonth()
        numberOfMonths += month2.getMonth()
        return numberOfMonths <= 0?0: numberOfMonths
    }

}
export default new ContractController()
