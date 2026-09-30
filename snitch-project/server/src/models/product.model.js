import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 150,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    currency: {
      type: String,
      enum: ["INR", "USD"],
      default: "INR",
    },

    discount: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    brand: {
      type: String,
      trim: true,
    },

    images: [
      {
        url: {
          type: String,
          required: true,
          trim: true,
        },

        fileId: {
          type: String,
          required: true,
          trim: true,
        },

        alt: {
          type: String,
          trim: true,
        },
      },
    ],

    size: [
      {
        type: String,
        trim: true,
      },
    ],

    stock: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    seller: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
  required: true,
},

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;