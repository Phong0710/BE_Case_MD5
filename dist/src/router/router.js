"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter_1 = __importDefault(require("./userRouter"));
const houseRouter_1 = __importDefault(require("./houseRouter/houseRouter"));
const ContractRouter_1 = __importDefault(require("./ContractRouter"));
const houseController_1 = __importDefault(require("../controller/houseController"));
const router = (0, express_1.Router)();
router.use('', userRouter_1.default);
router.use('/house', houseRouter_1.default);
router.use('/contract', ContractRouter_1.default);
router.get('/district', houseController_1.default.getDistrict);
router.get('/wards/:id', houseController_1.default.getWards);
exports.default = router;
//# sourceMappingURL=router.js.map