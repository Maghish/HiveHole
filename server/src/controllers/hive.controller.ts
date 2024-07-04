import { Request, Response } from "express";
import HiveModel from "../models/hive.model";

async function getHive(req: Request, res: Response): Promise<Response> {
  try {
    const name = req.params.name;
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

async function createHive(req: Request, res: Response): Promise<Response> {
  try {
    const { displayName, name, description, tags } = req.body;
    if (!displayName) {
      const displayName = name;
    }

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
      members: [],
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

async function updateHive(req: Request, res: Response): Promise<Response> {
  try {
    const name = req.params.name;
    const { displayName, description, tags } = req.body;

    let hive = await HiveModel.findOne({ name: name });

    //? Could have reduced the number of conditions but is it necessary to provie the certain attributes are not null for the typescript
    if (hive) {
      if (displayName) {
        hive.displayName = displayName;
      }
      if (description) {
        hive.description = description;
      }
      if (tags) {
        hive.tags = tags;
      }

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
async function deleteHive(req: Request, res: Response) {
  try {
  } catch (error: any) {
    return res
      .status(400)
      .json({ message: `Unexpected error occurred: ${error.message}` });
  }
}
async function addHiveMember(req: Request, res: Response) {
  try {
  } catch (error: any) {
    return res
      .status(400)
      .json({ message: `Unexpected error occurred: ${error.message}` });
  }
}
async function removeHiveMember(req: Request, res: Response) {
  try {
  } catch (error: any) {
    return res
      .status(400)
      .json({ message: `Unexpected error occurred: ${error.message}` });
  }
}

export {
  getHive,
  createHive,
  updateHive,
  deleteHive,
  addHiveMember,
  removeHiveMember,
};
