import mongoose from "mongoose";

const Schema = mongoose.Schema;

const hiveSchema = new Schema(
  {
    displayName: { type: String, required: true, maxLength: 50 },
    name: { type: String, required: true, maxLength: 30 },
    description: { type: String, required: true, maxLength: 300 },
    tags: [{ type: String }],
    // IDS of the members
    members: [{ type: Number }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("HiveModel", hiveSchema);
