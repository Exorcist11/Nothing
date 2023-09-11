import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema(
  {
    supplierName: {
      type: String,
      require: [true, "Require supplier name"],
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
    email: {
      type: String,
      require: [true, "Require email"],
    },
    phoneNumber: {
      type: String,
      require: true,
    },
    detail: {
      type: String,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Supplier = mongoose.model("Supplier", supplierSchema);
