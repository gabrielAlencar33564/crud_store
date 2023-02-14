import "reflect-metadata";
import "express-async-errors";
import express from "express";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import storeRouter from "./routes/store.routes";
import countieRouter from "./routes/counties.routes";

const app = express();
app.use(express.json());

app.use("/products", storeRouter);
app.use("/counties", countieRouter);

app.use(handleErrorMiddleware);
export default app;
