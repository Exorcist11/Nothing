import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  infoUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Info",
  },
  region: {
    type: String,
    require: [true, "Require region name"],
    default: "Việt Nam",
  },
  province: {
    type: String,
    require: [true, "Require province name"],
  },
  district: {
    type: String,
    require: [true, "Require district name"],
  },
  commune: {
    type: String,
    require: [true, "Require commune name"],
  },
  detail: {
    type: String,
  },
});

export const Address = mongoose.model("Address", addressSchema);
