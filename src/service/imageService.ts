import {AppDataSource} from "../data-source";
import {Image} from "../entity/image";

class ImageService {
    private imageRepository

    constructor() {
        this.imageRepository = AppDataSource.getRepository(Image)
    }

    addImage = async (id, data) => {
        await data.forEach(item => {
            this.imageRepository.save({house:id,imageURL:`${item}`})
        })
    }


}
export default new ImageService()
