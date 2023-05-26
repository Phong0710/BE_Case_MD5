import {Router} from 'express'
import {auth} from "../../middleware/auth";

// import {checkRoleClient} from "../middleware/checkRoleClient";

// import {checkRoleLandlord} from "../middleware/checkRoleLandlord";
// import {checkOwnerShip} from "../middleware/checkOwnerShip";
import houseController from "../../controller/houseController";

const houseRouter = Router()
// houseRouter.get('/search', houseController.searchHouse)
//
houseRouter.get('/', houseController.showAllHouse);
houseRouter.get('/:id', houseController.showHouseById);

houseRouter.post('/',
    auth,
    houseController.createHouse);
houseRouter.put('/:id', houseController.EditHouse);
houseRouter.delete('/:id', houseController.DeleteHouseByOwnerShip);

export default houseRouter