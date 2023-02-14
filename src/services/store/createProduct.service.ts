import AppDataSource from "../../data-source";
import Store from "../../entities/store.entitie";
import createCategoryService from "../category/createCategory.service";
import { IProductRequest, IProductResponse } from "../../interfaces/store/index";

const createProductService = async (data: IProductRequest): Promise<IProductResponse> => {
  const storeRepository = AppDataSource.getRepository(Store);

  let category = await createCategoryService(data.category);

  const product = storeRepository.create({
    ...data,
    category: category,
  });
  await storeRepository.save(product);

  return { ...product, category: category.name };
};

export default createProductService;
