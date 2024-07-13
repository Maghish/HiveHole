import { Request, Response } from "express";
import UserModel from "../models/user.model";
import { verify } from "jsonwebtoken";

interface DecodeJWT {
  id: string;
}

/**
 * Checks the request parameters and sorts out the authentication token, and finally checks if it's valid and returns the user or null
 * @param {import("express").Request} req
 * @returns {Promise<any | null>}
 */
async function getCurrentUserData(req: Request): Promise<any | null> {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = verify(token, process.env.JWT_SECRET!) as DecodeJWT;
    const user = await UserModel.findById(decoded.id).select("-password");
    return user;
  } else {
    return null;
  }
}

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
  } catch (error: any) {
    return res
      .status(400)
      .json({ message: `Unexpected error occurred: ${error.message}` });
  }
}

/**
 * Fetches the currently logged in user account's information
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @returns {Promise<import("express").Response>}
 */
async function getCurrentUser(req: Request, res: Response): Promise<Response> {
  try {
    const user = await getCurrentUserData(req);
    if (!user) {
      return res.status(400).json({ message: "You are not authenticated!" });
    }

    return res
      .status(200)
      .json({ message: "Succesfully got the current user", user: user });
  } catch (error: any) {
    return res
      .status(400)
      .json({ message: `Unexpected error occurred: ${error.message}` });
  }
}

export { getUser, getCurrentUser, getCurrentUserData };
