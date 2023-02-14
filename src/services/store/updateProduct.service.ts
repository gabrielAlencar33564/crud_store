import AppDataSource from "../../data-source";
import Category from "../../entities/category.entitie";
import Store from "../../entities/store.entitie";
import { IProductRequest, IProductResponse } from "../../interfaces/store/index";
import AppError from "../../errors/appError";

const updateProductService = async (data: IProductRequest, productId: string) => {
  const storeRepository = AppDataSource.getRepository(Store);

  const product = await storeRepository.findOneBy({ id: productId });
  if (!product) {
    throw new AppError("Product is not found", 404);
  }

  const categoryRepository = AppDataSource.getRepository(Category);

  let category = product.category;
  if (data.category) {
    category = (await categoryRepository.findOneBy({ name: data.category })) as Category;

    if (!category) {
      throw new AppError("Category is not found", 404);
    }
  }

  await storeRepository.update(productId, {
    ...product,
    ...data,
    category: category,
  });

  const updateProduct = await storeRepository.findOneBy({ id: productId });

  return { ...updateProduct, category: updateProduct!.category.name };
};

export default updateProductService;
