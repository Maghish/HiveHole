import mongoose from "mongoose";

const hiveSchema = new mongoose.Schema(
  {
    displayName: { type: String, required: true, maxLength: 30 },
    name: { type: String, required: true, maxLength: 20 },
    description: { type: String, required: true, maxLength: 200 },
    // The user's username
    owner: { type: String, required: true },
    moderators: [{ type: String }],
    tags: [{ type: String }],
    // The username of the members
    members: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("HiveModel", hiveSchema);
