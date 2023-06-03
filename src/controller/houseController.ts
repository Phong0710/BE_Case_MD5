import {Request, Response} from "express";
import houseService from "../service/houseService";
import {decode} from "jsonwebtoken";
import imageService from "../service/imageService";


class HouseController {

    createHouse = async (req: Request, res: Response) => {
        let id=req["decode"].id
        let house = await houseService.addHouse(req.body, id)
        let idhouse = house.id
        await imageService.addImage(idhouse,req.body.image)
        res.status(201).json("create house successfully");
        res.end();
    }
    showAllHouse = async (req: Request, res: Response) => {
        let listHouse = await houseService.findAllHouse();
        res.status(201).json(listHouse);
        res.end();
    }
    showHouseById = async (req: Request, res: Response) => {
        let id = req.params.id
        let house = await houseService.findHouseById(id)
        res.status(201).json(house);
    }
    EditHouse = async (req: Request, res: Response) => {
        let id = req.params.id
        let data = req.body;
        let imageData = data.image;
        await houseService.updateHouse(id, data);
        await imageService.upDateImage(imageData, id)
        res.status(201).json("update ok ");
        res.end();
    }
    DeleteHouseByOwnerShip = async (req: Request, res: Response) => {
        let id = req.params.id
        await houseService.DeleteHouse(id);
        console.log("delete ok")
        res.status(201).json("DeleteHouse ok ");
        res.end();
    }
    openHouseByOwnerShip = async (req: Request, res: Response) => {
        let id = req.params.id
        await houseService.openHouse(id);
        console.log("open  ok")
        res.status(201).json("DeleteHouse ok ");
        res.end();
    }
    searchHouse = async (req: Request, res: Response) => {
        console.log(req.query)
        if (!req.query.priceLow) {
            req.query.priceLow = "0";
        }
        if (!req.query.priceHigh) {
            req.query.priceHigh = "1000000"
        }
        if (!req.query.areaLow) {
            req.query.areaLow = "0"
        }
        if (!req.query.areaHigh) {
            req.query.areaHigh = "1000"
        }
        if (!req.query.sort) {
            req.query.sort = "0"
        }
        console.log("query after set default:", req.query)
        let house = await houseService.findHouse(req.query)
        res.status(201).json(house);
    }
    getDistrict = async (req: Request, res: Response)=>{
        let districts = await houseService.getDistrictById()
        res.status(201).json(districts);
        res.end();
    }
    getWards = async (req: Request, res: Response)=>{
        let id =  req.params.id
        let listWards = await houseService.getWardsById(id)
        res.status(201).json(listWards);
        res.end();

    }
    getListHouseById = async (req:Request, res:Response) => {
        let id = req.params.id
        let list = await houseService.getlistbyowner(id)
        res.status(200).json(list)
        res.end()
    }
    delete = async (req: Request, res: Response) => {
        let id = parseInt(req.params.id)
        console.log(id,"da vao BE")
        let house = await houseService.DeleteHouseforRent(id);
        res.status(200).json(house)
    }

}

export default new HouseController();