import { Request, Response, NextFunction } from "express";

const validateUnknownKeyMiddleware =
  (serializer: any) => async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const datakeys: string[] = Object.keys(data);
    const validKeys: string[] = serializer["_nodes"];

    for (let i = 0; i < datakeys.length; i++) {
      if (!validKeys.includes(datakeys[i])) {
        return res.status(401).json({
          message: `The object must have the following keys: ${validKeys}`,
        });
      }
    }
    return next();
  };

export default validateUnknownKeyMiddleware;
