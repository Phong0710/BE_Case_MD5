import {AppDataSource} from "../data-source";
import {House} from "../entity/house";

class HouseService {
    private houseRepository;

    constructor() {
        this.houseRepository = AppDataSource.getRepository(House);
    }

    findAllHouse = async () => {

        return  await this.houseRepository.find({
            relations: {
                wards: true,
                district: true,
                city: true,
                image: true
            }
        })

    }

    findHouse = async (query) => {
        if (query.wardsId) {
            return await this.houseRepository.createQueryBuilder("house")
                .where("house.price >= :priceLow", {priceLow: query.priceLow})
                .andWhere(`house.wardsId = :wardsId`, {wardsId: query.wardsId})
                .getMany()
        } else if (query.districtId) {
            return await this.houseRepository.createQueryBuilder("house")
                .where("house.price >= :priceLow", {priceLow: query.priceLow})
                .andWhere(`house.districtId = :districtId`, {districtId: query.districtId})
                .getMany()
        } else {
            return await this.houseRepository.createQueryBuilder("house")
                .where("house.price >= :priceLow", {priceLow: query.priceLow})
                .getMany()
        }

    }

    addHouse = async (house, id) => {
        let newHouse = new House();
        newHouse.price = house.price;
        newHouse.area = house.area;
        newHouse.description = house.description;
        newHouse.houseStatus = house.houseStatus;
        newHouse.user = id;
        newHouse.wards = house.wards
        newHouse.district = house.district;
        newHouse.city = house.city;
        await this.houseRepository.save(newHouse);
        return newHouse
    }
    updateHouse = async (id, house) => {
        await this.houseRepository
            .createQueryBuilder()
            .update({
                price: house.price,
                area: house.area,
                description: house.description,
                wards: house.wardsId,
                district: house.districtId,
            }).where({id: id})
            .execute();
    }
    DeleteHouse = async (id) => {
        await this.houseRepository
            .createQueryBuilder()
            .update({
                houseStatus:4
            }).where({id: id})
            .execute();
    }
    findHouseById = async (id) => {
        return await this.houseRepository.createQueryBuilder("house")
            .innerJoinAndSelect("house.user", "user")
            .leftJoinAndSelect("house.image", "image")
            .where("house.id = :id", {id: id})
            .getOne()

    }


}

export default new HouseService()
