import { Router } from "express";
import {
  createProductController,
  listProductController,
  listProductsController,
  deleteProductController,
  updateProductController,
} from "../controllers/store/index";

const storeRouter = Router();

storeRouter.post("", createProductController);
storeRouter.get("/:id", listProductController);
storeRouter.get("", listProductsController);
storeRouter.patch("/:id", updateProductController);
storeRouter.delete("/:id", deleteProductController);

export default storeRouter;
