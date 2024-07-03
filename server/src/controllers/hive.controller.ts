import { Request, Response } from "express";
import HiveModel from "../models/hive.model";

async function getHive(req: Request, res: Response): Promise<Response> {
  try {
    const hiveName = req.params.name;
    const hive = await HiveModel.findOne({ name: hiveName });

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
async function createHive(req: Request, res: Response) {
  try {
  } catch (error: any) {
    return res
      .status(400)
      .json({ message: `Unexpected error occurred: ${error.message}` });
  }
}
async function updateHive(req: Request, res: Response) {
  try {
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
