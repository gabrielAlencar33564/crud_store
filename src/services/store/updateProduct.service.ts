import AppDataSource from "../../data-source";
import Category from "../../entities/category.entitie";
import Store from "../../entities/store.entitie";
import AppError from "../../errors/appError";
import createCategoryService from "../category/createCategory.service";
import { IProductRequestUpdate, IProductResponse } from "../../interfaces/store/index";

const updateProductService = async (
  data: IProductRequestUpdate,
  productId: string
): Promise<IProductResponse> => {
  const storeRepository = AppDataSource.getRepository(Store);

  const product = await storeRepository.findOneBy({ id: productId });
  if (!product) {
    throw new AppError("Product is not found", 404);
  }

  let category = product.category;
  if (data.category) {
    category = (await createCategoryService(data.category)) as Category;

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

  return { ...updateProduct, category: updateProduct!.category.name } as IProductResponse;
};

export default updateProductService;
