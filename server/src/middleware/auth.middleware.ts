import { NextFunction, Request, Response } from "express";
import UserModel from "../models/user.model";
import { verify } from "jsonwebtoken";

interface DecodeJWT {
  id: string;
}

async function protect(req: Request | any, res: Response, next: NextFunction) {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = verify(token, process.env.JWT_SECRET!) as DecodeJWT;
      req.user = await UserModel.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: error });
    }
  } else {
    res
      .status(400)
      .json({ message: "You need to be authenticated to proceed further" });
  }
}

export default protect;
