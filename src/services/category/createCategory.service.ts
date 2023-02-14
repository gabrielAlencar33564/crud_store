import AppDataSource from "../../data-source";
import Category from "../../entities/category.entitie";
import { ICategoryResponse } from "../../interfaces/store";

const createCategoryService = async (name: string): Promise<ICategoryResponse> => {
  const categoryRepository = AppDataSource.getRepository(Category);

  let category = await categoryRepository.findOneBy({ name: name });
  if (!category) {
    category = categoryRepository.create({
      name: name,
    });
    await categoryRepository.save(category);
  }

  return category;
};

export default createCategoryService;
