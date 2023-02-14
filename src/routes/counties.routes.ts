import { Router } from "express";
import { listCountyController } from "../controllers/county/listCounty.controller";

const countieRouter = Router();

countieRouter.get("/:name", listCountyController);

export default countieRouter;
