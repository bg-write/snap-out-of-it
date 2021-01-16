const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const dealBreakerSchema = new Schema({
    // id
    text: {type: String, required: true}

},{
    timestamps: true
})

module.exports = mongoose.model('DealBreaker', dealBreakerSchema);