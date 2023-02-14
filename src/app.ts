import "reflect-metadata";
import "express-async-errors";
import express from "express";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import storeRouter from "./routes/store.routes";

const app = express();
app.use(express.json());

app.use("/product", storeRouter);

app.use(handleErrorMiddleware);
export default app;
