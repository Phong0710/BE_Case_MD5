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
        res.end();
    }
    EditHouse = async (req: Request, res: Response) => {
        let id = req.params.id
        await houseService.updateHouse(id, req.body);
        res.status(201).json("update ok ");
        res.end();
    }
    DeleteHouseByOwnerShip = async (req: Request, res: Response) => {
        let id = req.params.id
        await houseService.DeleteHouse(id);
        res.status(201).json("DeleteHouse ok ");
        res.end();
    }


}

export default new HouseController();