import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    displayName: { type: String, required: true, maxLength: 50 },
    username: { type: String, required: true, maxLength: 30 },
    bio: { type: String, required: true, maxLength: 200 },
    // Profile photo URL, not the actual file
    profilePhoto: { type: String, required: true },
    followers: { type: Number, required: false, default: 0 },
    // The username of the following people
    following: [{ type: String }],
    onlineStatus: {
      type: "Online" || "Do Not Disturb" || "Offline",
      default: "Offline",
    },
    status: { type: String, maxLength: 100 },
    lastLogin: { type: String, required: false, default: Date.now() },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("UserModel", userSchema);
