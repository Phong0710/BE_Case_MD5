import {AppDataSource} from "../data-source";
import {House} from "../entity/house";
import {query} from "express";
import {House_status} from "../entity/house_status";
import {City} from "../entity/city";
import {District} from "../entity/district";
import {Wards} from "../entity/wards";

class HouseService {
    private houseRepository;

    constructor() {
        this.houseRepository = AppDataSource.getRepository(House);
    }

    findAllHouse = async () => {
        let houses = await this.houseRepository.find({
            relations: {
                user:true,
                wards: true,
                district: true,
                city: true,
                image: true,
            }, select: {
                user: {
                    name: true
                }
            }
        })
        return houses
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
                .andWhere("house.price <= :priceHigh", {priceHigh: query.priceHigh})
                .getMany()
        }
    }

    addHouse = async (house, id) => {
        let newHouse = new House();
        newHouse.nameHouse = house.nameHouse;
        newHouse.price = house.price;
        newHouse.area = house.area;
        newHouse.description = house.description;
        // newHouse.houseStatus = house.houseStatus;
        newHouse.houseStatus = await AppDataSource.getRepository(House_status).findOneBy({
                id: 3
            }
        );
        newHouse.user = id;
        newHouse.wards = house.wards
        newHouse.district = house.district;
        newHouse.city = await AppDataSource.getRepository(City).findOneBy({
                id: 1
            }
        );

        await this.houseRepository.save(newHouse);
        return newHouse
    }
    updateHouse = async (id, house) => {
        await this.houseRepository
            .createQueryBuilder()
            .update({
                nameHouse:house.nameHouse,
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
                houseStatus: 4
            }).where({id: id})
            .execute();
    }
    findHouseById = async (id) => {
        return await this.houseRepository.findOne({
            relations: {
                user: true,
                image: true,
            }, where: {
                id: +id
            }, select: {
                user: {
                    name: true
                }
            }
        })
    }
    getDistrictById = async () => {
        try {
            const result = await AppDataSource.getRepository(District).find({});

            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    getWardsById = async (id) => {
        try {
            return await AppDataSource.createQueryBuilder()
                .select("ward")
                .from(Wards, "ward")
                // .innerJoinAndSelect("ward.district", "district")
                .where("ward.districtId = :id", {id: id})
                .getMany()
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

}

export default new HouseService()
