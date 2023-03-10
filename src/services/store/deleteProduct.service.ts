import AppDataSource from "../../data-source";
import Store from "../../entities/store.entitie";
import AppError from "../../errors/appError";

const deleteProductsService = async (productId: string): Promise<string> => {
  const storeRepository = AppDataSource.getRepository(Store);
  const product = await storeRepository.findOneBy({ id: productId });

  if (!product) {
    throw new AppError("Product is not found", 404);
  }

  await storeRepository.update(productId, {
    status: "INACTIVE",
    deleted_at: new Date().toISOString(),
  });

  return "Deleted product";
};

export default deleteProductsService;
