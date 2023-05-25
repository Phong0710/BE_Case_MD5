"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controller/productController"));
const productRouter = (0, express_1.Router)();
productRouter.get('/', productController_1.default.findAll);
productRouter.get('/:id', productController_1.default.findOne);
productRouter.post('/', productController_1.default.addProduct);
productRouter.put('/:id', productController_1.default.edit);
productRouter.delete('/:id', productController_1.default.remove);
exports.default = productRouter;
//# sourceMappingURL=productRouter.js.map