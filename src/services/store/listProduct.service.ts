import AppDataSource from "../../data-source";
import Store from "../../entities/store.entitie";
import AppError from "../../errors/appError";

const listProductService = async (productId: string): Promise<Store | null> => {
  const storeRepository = AppDataSource.getRepository(Store);
  const product = await storeRepository.findOneBy({ id: productId });

  if (!product) {
    throw new AppError("Product is not found", 404);
  }

  return product;
};

export default listProductService;
