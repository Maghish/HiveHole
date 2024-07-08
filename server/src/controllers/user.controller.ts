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

/**
 * Creates a new user from the given arguments
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @returns {Promise<import("express").Response>}
 */
async function createUser(req: Request, res: Response): Promise<Response> {
  try {
    const { displayName, username, email, password } = req.body;
    let user = await UserModel.findOne({ username: username });
    if (user) {
      return res.status(400).json({
        message: "Username is already taken, please pick a different username!",
      });
    }

    user = new UserModel({
      displayName: displayName,
      username: username,
      email: email,
      password: password,
      bio: "What's up! I just started using HiveHole!",
      following: [],
    });
    user = await user.save();

    return res
      .status(200)
      .json({ message: "Successfully created new user", user: user });
  } catch (error) {
    return res
      .status(400)
      .json({ message: `Unexpected error occurred: ${error}` });
  }
}

export { getUser, createUser };
