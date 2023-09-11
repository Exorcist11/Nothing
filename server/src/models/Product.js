import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      require: [true, "Require product name"],
    },
    price: {
      type: Number,
      require: [true, "Require price product"],
    },
    amount: {
      type: Number,
      require: [true, "Require amount"],
    },
    suppliers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier",
      },
    ],
    types: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Type",
      },
    ],
    image: {
      type: String,
    },
    detail: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
