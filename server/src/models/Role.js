import mongoose from "mongoose";

const roleSchema = new mongoose.Schema(
  {
    roleName: {
      type: String,
      require: [true, "Require roleName"],
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Role = mongoose.model("Role", roleSchema);
