import mongoose from "mongoose";

const Schema = mongoose.Schema;

const hiveSchema = new Schema(
  {
    // Custom made ID with only integers
    id: { type: Number, required: true },
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
