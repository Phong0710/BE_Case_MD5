import {AppDataSource} from "../data-source";
import {Contract} from "../entity/contract";

class ContractService {
    private contractRepository

    constructor() {
        this.contractRepository = AppDataSource.getRepository(Contract)
    }

    getContractByUserId = async (id) => {
       return  await AppDataSource
            .getRepository(Contract)
            .createQueryBuilder("contract")
            .leftJoinAndSelect('contract.house', 'house')
            .where( { user: id })
            .getOne()
    }
    getContractByID = async (id) => {
    let contract = await AppDataSource.createQueryBuilder()
        .select('contract')
        .from(Contract,"contract")
        .where({id:id})
        .getOne()
        return contract
    }
    showAll = async ()=>{
        let contract = await this.contractRepository.find()
        return contract
    }
    updateContractByClient = async (id, data)    => {

        let contract = await this.contractRepository
            .createQueryBuilder()
            .update()
            .set({
                startMonth: data.startMonth,
                endMonth: data.endMonth,
            })
            .where("id = :id", {id: id})
            .execute();

        return contract;
    }
    addContractByClient= async(id,data,cost,userId,price)=>{
        await this.contractRepository.createQueryBuilder()
            .insert()
            .into(Contract)
            .values({
                price:price,
                startDay:data.startMonth,
                endDay:data.endMonth,
                cost:cost,
                user:userId,
                house:id,
                status:2

            })
            .execute()

    }


}
export default new ContractService()

