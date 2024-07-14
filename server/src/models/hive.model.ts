import mongoose from "mongoose";

const hiveSchema = new mongoose.Schema(
  {
    displayName: { type: String, required: true, maxLength: 50 },
    name: { type: String, required: true, maxLength: 30 },
    description: { type: String, required: true, maxLength: 300 },
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
