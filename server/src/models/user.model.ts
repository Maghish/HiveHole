import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    displayName: { type: String, required: true, maxLength: 50 },
    username: { type: String, required: true, maxLength: 30 },
    email: { type: String, required: true, maxLength: 30 },
    password: { type: String, required: true, maxLength: 40 },
    bio: { type: String, required: true, maxLength: 200 },
    // Profile photo URL, not the actual file
    profilePhoto: { type: String, required: false, default: "" },
    followers: { type: Number, required: false, default: 0 },
    // The username of the following people
    following: [{ type: String }],
    onlineStatus: {
      type: String, // Online || Offline || Do Not Disturb
      default: "Offline",
    },
    status: { type: String, maxLength: 100, required: false },
    lastLogin: { type: String, required: false, default: Date.now() },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("UserModel", userSchema);
