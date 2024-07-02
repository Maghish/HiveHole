import { Request, Response } from "express";

async function sayHello(req: Request, res: Response) {
  return res.status(200).json({ message: "Hello!" });
}

export { sayHello };
