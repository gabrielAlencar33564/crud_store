import { Router } from "express";
import {
  createProductController,
  listProductController,
  listProductsController,
  deleteProductController,
  updateProductController,
} from "../controllers/store/index";
import validadeSerializerMiddleware from "../middlewares/validateSerializer.middleware";
import { createProductSerializer } from "../serializers/store.serializer";

const storeRouter = Router();

storeRouter.post(
  "",
  validadeSerializerMiddleware(createProductSerializer),
  createProductController
);
storeRouter.get("/:id", listProductController);
storeRouter.get("", listProductsController);
storeRouter.patch("/:id", updateProductController);
storeRouter.delete("/:id", deleteProductController);

export default storeRouter;
