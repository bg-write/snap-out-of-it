const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    text: {type: String, required: true},

},{
    timestamps: true
})

module.exports = mongoose.model('Playlist', playlistSchema);
