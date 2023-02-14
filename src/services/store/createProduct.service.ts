import AppDataSource from "../../data-source";
import Category from "../../entities/category.entitie";
import Store from "../../entities/store.entitie";
import { IProductRequest, IProductResponse } from "../../interfaces/store/index";

const createProductService = async (data: IProductRequest): Promise<IProductResponse> => {
  const categoryRepository = AppDataSource.getRepository(Category);
  const storeRepository = AppDataSource.getRepository(Store);

  let category = await categoryRepository.findOneBy({ name: data.category });
  if (category) {
    category = categoryRepository.create({
      name: data.category,
    });
    await categoryRepository.save(category);
  }

  const product = storeRepository.create({
    ...data,
    category: category!,
  });
  await storeRepository.save(product);

  return { ...product, category: category!.name };
};

export default createProductService;
