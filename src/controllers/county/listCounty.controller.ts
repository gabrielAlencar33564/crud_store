import { Request, Response } from "express";
import listCountyService from "../../services/county/listCounty.service";

export const listCountyController = async (req: Request, res: Response) => {
  const name = req.params.name;
  const products = await listCountyService(name);

  return res.status(200).json(products);
};
