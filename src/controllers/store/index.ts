import { Request, Response } from "express";
import { IProductRequest } from "../../interfaces/store/index";
import createProductService from "../../services/store/createProduct.service";
import listProductService from "../../services/store/listProduct.service";
// import updateProductService from "../../services/store/updateProduct.service";
import deleteProductsService from "../../services/store/deleteProduct.service";
import listProductsService from "../../services/store/listProducts.service";

export const createProductController = async (req: Request, res: Response) => {
  const data: IProductRequest = req.body;
  const product = await createProductService(data);

  return res.status(201).json(product);
};

export const listProductsController = async (req: Request, res: Response) => {
  const products = await listProductsService();
  return res.status(200).json(products);
};

export const listProductController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const Products = await listProductService(id);

  return res.status(200).json(Products);
};

// export const updateProductController = async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const data = req.body;
//   const Product = await updateProductService(data, id);

//   return res.status(200).json(Product);
// };

export const deleteProductController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const Product = await deleteProductsService(id);

  return res.status(204).json(Product);
};
