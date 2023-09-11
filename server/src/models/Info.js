import mongoose from "mongoose";

const infoSchema = new mongoose.Schema({
  userID: {
    typeof: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  firstName: {
    type: String,
    require: [true, "Require firstName"],
  },
  lastName: {
    type: String,
    require: [true, "Require lastName"],
  },
  dateOfBirth: {
    type: Date,
    require: [true, "Require dateOfBirth"],
  },
  address: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
  ],
  gender: {
    type: Boolean,
    default: true,
  },
  phoneNumber: {
    type: Number,
    require: [true, "Require phoneNumber"],
  },
});

export const Info = mongoose.model("Info", infoSchema);
