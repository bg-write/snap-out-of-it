const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const meTimeSchema = new Schema({
    // id
    text: 
        {type: String, required: true}

},{
    timestamps: true
})

module.exports = mongoose.model('meTime', meTimeSchema);