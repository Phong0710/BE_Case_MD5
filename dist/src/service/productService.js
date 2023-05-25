"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../enitity/product");
const data_source_1 = require("../data-source");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let products = await this.productRepository.find({
                relations: {
                    category: true,
                }
            });
            return products;
        };
        this.getById = async (id) => {
            let products = await this.productRepository.find({
                relations: {
                    category: true,
                }, where: {
                    id: id
                }
            });
            return products[0];
        };
        this.add = async (product) => {
            console.log(product);
            await this.productRepository.save(product);
        };
        this.editProduct = async (id, productEdit) => {
            console.log(productEdit);
            await data_source_1.AppDataSource.getRepository(product_1.Product)
                .createQueryBuilder()
                .update(product_1.Product)
                .set({
                price: productEdit.price,
                quantity: productEdit.quantity,
                image: productEdit.image,
                name: productEdit.name,
                category: productEdit.category,
            })
                .where({ id: productEdit.id })
                .execute();
        };
        this.delete = async (id) => {
            await this.productRepository
                .createQueryBuilder('users')
                .delete()
                .from(product_1.Product)
                .where("id = :id", { id: id })
                .execute();
        };
        this.productRepository = data_source_1.AppDataSource.getRepository(product_1.Product);
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map