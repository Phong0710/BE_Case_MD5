"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
const CategoryService_1 = __importDefault(require("../service/CategoryService"));
class ProductController {
    constructor() {
        this.findAll = async (req, res) => {
            let listProduct = await this.productService.getAll();
            res.status(200).json(listProduct);
        };
        this.findOne = async (req, res) => {
            let { id } = req.params;
            let listProduct = await this.productService.getById(id);
            res.status(200).json(listProduct);
        };
        this.addProduct = async (req, res) => {
            await this.productService.add(req.body);
            if (!req.body.name) {
                res.status(400).json({
                    message: 'name missing'
                });
                res.end();
            }
            else {
                res.status(201).json({
                    message: 'OK'
                });
            }
        };
        this.edit = async (req, res) => {
            let id = req.params.id;
            let { product } = req.body;
            await this.productService.editProduct(id, product);
            res.status(200).json({
                message: 'Edit success'
            });
        };
        this.remove = async (req, res) => {
            let id = req.params.id;
            await this.productService.delete(id);
            res.status(200).json({
                message: 'Delete success'
            });
        };
        this.productService = productService_1.default;
        this.categoryService = CategoryService_1.default;
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map