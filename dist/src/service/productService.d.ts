declare class ProductService {
    private productRepository;
    constructor();
    getAll: () => Promise<any>;
    getById: (id: any) => Promise<any>;
    add: (product: any) => Promise<void>;
    editProduct: (id: any, productEdit: any) => Promise<void>;
    delete: (id: any) => Promise<void>;
}
declare const _default: ProductService;
export default _default;
