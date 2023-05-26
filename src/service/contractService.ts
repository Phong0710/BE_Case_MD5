import {AppDataSource} from "../data-source";
import {Contract} from "../entity/contract";

class ContractService {
    private contractRepository

    constructor() {
        this.contractRepository = AppDataSource.getRepository(Contract)
    }

    getContractByUserId = async (id) => {
        let contract = await this.contractRepository.find({
            relation: {
                house:true
            },
            where: {
                houseId:id
            }
        })
        return contract
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
    updateContractByClient = async (id,data)=>{
        let contract = await this.contractRepository.createQueryBuilder()
            .update()
            .set({
                startmonth: data.startmonth,
                endmonth: data.endmonth
            })
            .where("id=:id",{id:id})
            .execute()

        return contract
    }
    addContractByClient= async(id,data,cost,userId,price)=>{
        await this.contractRepository.createQueryBuilder()
            .insert()
            .into(Contract)
            .values({
                price:price,
                startMonth:data.startmonth,
                endMonth:data.endmonth,
                cost:cost,
                userId:userId,
                house:id

            })
            .execute()

    }


}
export default new ContractService()

