import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, default: 0 },
      },
    ],
    subTotal: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Cart = mongoose.model("Cart", cartSchema);
