import AppDataSource from "../../data-source";
import Store from "../../entities/store.entitie";

const listProductsService = async (): Promise<Store[]> => {
  const storeRepository = AppDataSource.getRepository(Store);
  const products = await storeRepository.find();

  return products;
};

export default listProductsService;
