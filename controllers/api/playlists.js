const Playlist = require('../../models/playlist')

module.exports = {
    index,
    show,
    create,
    delete: deleteOne,
    update
}

// setting all playlists to variable and turning variable into json obj
async function index(req,res){
    const playlists = await Playlist.find({})
    res.status(200).json(playlists)
}

// finding individual playlist by id and set it to a variable that turns into a json obj
async function show(req, res){
    const playlist = await Playlist.findById(req.params.id)
    res.status(200).json(playlist)
}

// creating a playlist from req body, setting to Playlist variable, turning variable into json obj
async function create(req,res){
    const playlist = await Playlist.create(req.body)
    res.status(201).json(playlist)
}

// deleting playlist by id, and setting to variable, and turning variable into a json obj
async function deleteOne(req,res){
    const deletedPlaylist = await Playlist.findByIdAndRemove(req.params.id)
    res.status(200).json(deletedPlaylist)
}

// updating playlist by id to req body, setting to variable, turning variable into json obj
async function update(req,res){
    const updatedPlaylist = await Playlist.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedPlaylist)
}
