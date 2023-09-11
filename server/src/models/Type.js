import mongoose from "mongoose";

const typeSchema = new mongoose.Schema(
  {
    typeName: {
      type: String,
      require: true,
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

export const TypeProduct = mongoose.model("TypeProduct", typeSchema);
