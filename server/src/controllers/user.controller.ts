import { Request, Response } from "express";
import UserModel from "../models/user.model";

/**
 * Gets the user data from the given username
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @returns {Promise<import("express").Response>}
 */
async function getUser(req: Request, res: Response): Promise<Response> {
  try {
    const username = req.params.username;
    const user = await UserModel.findOne({ username: username });
    if (!user) {
      return res.status(404).json({ message: "Couldn't find the user!" });
    }

    return res
      .status(200)
      .json({ message: "Successfully fetched the user", user: user });
  } catch (error) {
    return res
      .status(400)
      .json({ message: `Unexpected error occurred: ${error}` });
  }
}

export { getUser };
