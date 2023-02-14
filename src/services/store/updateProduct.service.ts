import AppDataSource from "../../data-source";
import Category from "../../entities/category.entitie";
import Store from "../../entities/store.entitie";
import { IProductRequest, IProductResponse } from "../../interfaces/store/index";

// const updateProductService = async (
//   data: IProductRequest,
//   productId: string
// ) => {
//   const categoryRepository = AppDataSource.getRepository(Category);

//   if (data.category) {
//       let category = await categoryRepository.findOneBy({ name: data.name });
//     if (category) {
//         category = categoryRepository.create({
//           name: data.category,
//         });
//         await categoryRepository.save(category);
//   }

//   const storeRepository = AppDataSource.getRepository(Store);

//   const product = storeRepository.update(productId, {
//     ...data,
//     category: category!
//   });

// };

// export default updateProductService;
