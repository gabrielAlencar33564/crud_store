import { Router } from "express";
import validadeSerializerMiddleware from "../middlewares/validateSerializer.middleware";
import validateUnknownKeyMiddleware from "../middlewares/validateUnknownKey.middleware";
import {
  createProductController,
  listProductController,
  listProductsController,
  deleteProductController,
  updateProductController,
} from "../controllers/store/index";
import { createProductSerializer } from "../serializers/store.serializer";

const storeRouter = Router();

storeRouter.post(
  "",
  validadeSerializerMiddleware(createProductSerializer),
  validateUnknownKeyMiddleware(createProductSerializer),
  createProductController
);
storeRouter.get("/:id", listProductController);
storeRouter.get("", listProductsController);
storeRouter.patch(
  "/:id",
  validateUnknownKeyMiddleware(createProductSerializer),
  updateProductController
);
storeRouter.delete("/:id", deleteProductController);

export default storeRouter;
