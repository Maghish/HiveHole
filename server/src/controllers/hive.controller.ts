import { Request, Response } from "express";
import HiveModel from "../models/hive.model";
import UserModel from "../models/user.model";
import { getCurrentUserData } from "./user.controller";

/**
 * Get the hive using it's name
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @returns {Promise<import("express").Response>}
 */
async function getHive(req: Request, res: Response): Promise<Response> {
  try {
    var name = req.params.name;
    // prettier-ignore
    if (!name) { return res.status(404).json({ message: "Please provide a valid name like /api/hive/gethive/<name>" }) }
    name = name.toLowerCase();
    const hive = await HiveModel.findOne({ name: name });

    if (hive) {
      return res
        .status(200)
        .json({ message: "Successfully found the hive", hive: hive });
    }

    return res.status(404).json({ message: "Couldn't find the Hive!" });
  } catch (error: any) {
    return res
      .status(400)
      .json({ message: `Unexpected error occurred: ${error.message}` });
  }
}

/**
 * Get the user's subscribed (hives that the user is a member of) hives
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @returns {Promise<import("express").Response>}
 */
async function getUsersHives(req: Request, res: Response): Promise<Response> {
  try {
    const user = await getCurrentUserData(req);

    const totalHives = await HiveModel.find({});
    var hives: any[] = [];

    totalHives.forEach((hive) => {
      if (hive.members.includes(user.username)) {
        hives.push(hive);
      }
    });

    return res
      .status(200)
      .json({ message: "Successfully fetched the hives", hives: hives });
  } catch (error: any) {
    return res
      .status(400)
      .json({ message: `Unexpected error occurred: ${error.message}` });
  }
}

/**
 * Create a hive with the given arguments
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @returns {Promise<import("express").Response>}
 */
async function createHive(req: Request, res: Response): Promise<Response> {
  try {
    const { displayName, name, description, tags } = req.body;

    // prettier-ignore
    if (!displayName) { return res.status(400).json({ message: "The attribute displayName is missing, please provide valid arguments" }) }
    // prettier-ignore
    if (!name) { return res.status(400).json({ message: "The attribute name is missing, please provide valid arguments" }) }
    // prettier-ignore
    if (!description) { return res.status(400).json({ message: "The attribute description is missing, please provide valid arguments" }) }
    // prettier-ignore
    if (!tags) { return res.status(400).json({ message: "The attribute tags is missing, please provide valid arguments" }) }

    const owner = await getCurrentUserData(req);
    const hiveName = name.toLowerCase().replace(" ", "");

    const checkHive = await HiveModel.findOne({ name: hiveName });
    if (checkHive) {
      return res
        .status(400)
        .json({ message: `Hive already exists with the name: ${hiveName}` });
    }

    let hive = new HiveModel({
      displayName: displayName,
      name: hiveName,
      description: description,
      tags: tags,
      owner: owner.username,
      moderators: [],
      members: [owner.username],
    });

    hive = await hive.save();
    return res.status(200).json({
      message: `Successfully created hive: ${displayName}`,
      hive: hive,
    });
  } catch (error: any) {
    return res
      .status(400)
      .json({ message: `Unexpected error occurred: ${error.message}` });
  }
}

/**
 * Update the hive using it's name with the given arguments
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @returns {Promise<import("express").Response>}
 */
async function updateHive(req: Request, res: Response): Promise<Response> {
  try {
    const user = await getCurrentUserData(req);

    const name = req.params.name;
    // prettier-ignore
    if (!name) { return res.status(404).json({ message: "Please provide a valid name like /api/hive/updatehive/<name>" }) }

    const { displayName, description, tags } = req.body;

    let hive = await HiveModel.findOne({ name: name });

    //? Could have reduced the number of conditions but is it necessary to provide the certain attributes are not null for the typescript
    if (hive) {
      if (
        hive.owner !== user.username &&
        hive.moderators.includes(user.username) === false
      ) {
        return res.status(400).json({
          message: "You don't have permissions to edit the hive details!",
        });
      }

      // prettier-ignore
      if (displayName) { hive.displayName = displayName }
      // prettier-ignore
      if (description) { hive.description = description }
      // prettier-ignore
      if (tags) { hive.tags = tags }

      hive = await hive!.save();
      return res.status(200).json({
        message: `Successfully updated ${name} hive`,
        hive,
      });
    } else {
      return res.status(404).json({ message: `Couldn't find the Hive!` });
    }
  } catch (error: any) {
    return res
      .status(400)
      .json({ message: `Unexpected error occurred: ${error.message}` });
  }
}

/**
 * Delete the hive using it's name
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @returns {Promise<import("express").Response>}
 */
async function deleteHive(req: Request, res: Response): Promise<Response> {
  try {
    const user = await getCurrentUserData(req);

    const name = req.params.name;
    // prettier-ignore
    if (!name) { return res.status(404).json({ message: "Please provide a valid name like /api/hive/deletehive/<name>" }) }
    const hive = await HiveModel.findOne({ name: name });
    if (!hive) {
      return res.status(404).json({ message: "Couldn't find the Hive!" });
    }

    // Only the server owner can delete the hive
    if (hive.owner !== user.username) {
      return res
        .status(400)
        .json({ message: "You don't have permissions to delete the hive!" });
    }

    await HiveModel.deleteOne({ name: name });

    return res.status(200).json({ message: `Successfully deleted ${name}` });
  } catch (error: any) {
    return res
      .status(400)
      .json({ message: `Unexpected error occurred: ${error.message}` });
  }
}

/**
 * Add the given user to the hive using the given name
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @returns {Promise<import("express").Response>}
 */
async function addHiveMember(req: Request, res: Response): Promise<Response> {
  try {
    const name = req.params.name;
    // prettier-ignore
    if (!name) { return res.status(404).json({ message: "Please provide a valid name like /api/hive/addhivemember/<name>" }) }
    const { username } = req.body;
    // prettier-ignore
    if (!username) { return res.status(400).json({ message: "The attribute username is missing, please provide valid arguments" }) }
    let hive = await HiveModel.findOne({ name: name });
    if (!hive) {
      return res.status(404).json({ message: "Couldn't find the Hive!" });
    }

    const user = await UserModel.findOne({ username: username });
    if (!user) {
      return res.status(404).json({ message: "Couldn't find the user!" });
    }

    if (hive.members.includes(username)) {
      return res.status(400).json({ message: "User is already in the hive!" });
    }

    hive.members = [...hive.members, username];
    hive = await hive.save();

    return res.status(200).json({ message: `Successfully added`, hive: hive });
  } catch (error: any) {
    return res
      .status(400)
      .json({ message: `Unexpected error occurred: ${error.message}` });
  }
}

/**
 * Remove the given user from the hive using the given name
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @returns {Promise<import("express").Response>}
 */
async function removeHiveMember(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const name = req.params.name;
    // prettier-ignore
    if (!name) { return res.status(404).json({ message: "Please provide a valid name like /api/hive/gethive/<name>" }) }
    const { username } = req.body;
    // prettier-ignore
    if (!username) { return res.status(400).json({ message: "The attribute username is missing, please provide valid arguments" }) }
    let hive = await HiveModel.findOne({ name: name });
    if (!hive) {
      return res.status(404).json({ message: "Couldn't find the Hive!" });
    }

    const user = await UserModel.findOne({ username: username });
    if (!user) {
      return res.status(404).json({ message: "Couldn't find the user!" });
    }

    if (!hive.members.includes(username)) {
      return res
        .status(400)
        .json({ message: "The user doesn't exist on the hive!" });
    }

    const memberIndex = hive.members.indexOf(username);
    hive.members.splice(memberIndex, 1);
    hive = await hive.save();

    return res.status(200).json({
      messsage: `Successfully removed ${username} from ${name}`,
      hive: hive,
    });
  } catch (error: any) {
    return res
      .status(400)
      .json({ message: `Unexpected error occurred: ${error.message}` });
  }
}

export {
  getHive,
  getUsersHives,
  createHive,
  updateHive,
  deleteHive,
  addHiveMember,
  removeHiveMember,
};
