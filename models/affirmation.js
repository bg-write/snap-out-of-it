const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const affirmationSchema = new Schema({
    text: {type: String, required: true}
}, {
    timestamps: true
})
