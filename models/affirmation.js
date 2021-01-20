const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const affirmationSchema = new Schema(
  {
    text: { type: String, required: true },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Affirmation", affirmationSchema);
