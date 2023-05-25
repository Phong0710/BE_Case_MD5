import {Product} from "../enitity/product";
import {AppDataSource} from "../data-source";
import {ILike, Like} from "typeorm";

class ProductService {
    private productRepository;

    constructor() {
        this.productRepository = AppDataSource.getRepository(Product)
    }

    getAll = async () => {
        let products = await this.productRepository.find({
            relations: {
                category: true,
            }
        });
        return products;
    }
    getById = async (id) => {

        let products = await this.productRepository.find({
            relations: {
                category: true,
            }, where: {
                id: id
            }
        });
        return products[0];
    }

    add = async (product) => {
        console.log(product)
        await this.productRepository.save(product);
    }
    editProduct = async (id, productEdit) => {
        console.log(productEdit)
        await AppDataSource.getRepository(Product)
            .createQueryBuilder()
            .update(Product)
            .set({
                price: productEdit.price,
                quantity: productEdit.quantity,
                image: productEdit.image,
                name: productEdit.name,
                category: productEdit.category,
            })
            .where({id: productEdit.id})
            .execute()
    }
    delete = async (id) => {
        await this.productRepository
            .createQueryBuilder('users')
            .delete()
            .from(Product)
            .where("id = :id", { id: id})
            .execute()

    }
}

export default new ProductService();