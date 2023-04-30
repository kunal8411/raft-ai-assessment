const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    position: { type: Number, required: true },
    imageUrl: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models["Document"] ||
  mongoose.model("Document", DocumentSchema);
