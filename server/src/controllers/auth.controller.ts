import UserModel from "../models/user.model";
import { Request, Response } from "express";
import { sign, verify } from "jsonwebtoken";
import { genSalt, hash, compare } from "bcryptjs";

interface DecodeJWT {
  id: string;
}

function generateToken(id: any) {
  return sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: "30d",
  });
}

async function signupUser(req: Request, res: Response): Promise<Response> {
  try {
    const { displayName, username, email, password } = req.body;

    UserModel.findOne({ username: username }).then((response) => {
      if (response) {
        return res.status(400).json({
          message:
            "The username is already taken, please enter a different one",
        });
      }
    });

    UserModel.findOne({ email: email }).then((response) => {
      if (response) {
        return res.status(400).json({
          message:
            "User already exists with the same email, please try to login or try a different email",
        });
      }
    });

    // Hash Password
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    let user = new UserModel({
      username: username,
      displayName: displayName,
      email: email,
      password: hashedPassword,
      bio: "Hello! I'm new to HiveHole!",
      profilePhoto: "",
      following: [],
      onlineStatus: "Online",
    });

    user = await user.save();

    return res.status(200).json({
      message: "Successfully created new user",
      token: generateToken(user._id),
    });
  } catch (error: any) {
    return res
      .status(400)
      .json({ message: `Unexpected error occurred: ${error.message}` });
  }
}

export default signupUser;
