const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const mantraSchema = new Schema({
    text: {type: String, required: true}

},{
    timestamps: true
})

module.exports = mongoose.model('Mantra', mantraSchema);
