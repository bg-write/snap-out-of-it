const MeTime = require('../../models/meTime')

module.exports = {
    index,
    show,
    create,
    delete: deleteOne,
    update
}

// setting all mantras to variable and turning variable into json obj
async function index(req,res){
    const meTime = await MeTime.find({})
    res.status(200).json(meTime)
}

// finding individual mantra by id and set it to a variable that turns into a json obj
async function show(req, res){
    const meTime = await MeTime.findById(req.params.id)
    res.status(200).json(meTime)
}

// creating a mantra from req body, setting to mantra variable, turning variable into json obj
async function create(req,res){
    const meTime = await MeTime.create(req.body)
        res.status(201).json(meTime)
}

// deleting mantra by id, and setting to variable, and turning variable into a json obj
async function deleteOne(req,res){
    const deletedMeTime = await MeTime.findByIdAndRemove(req.params.id)
    res.status(200).json(deletedMeTime)
}

// updating mantra by id to req body, setting to variable, turning variable into json obj
async function update(req,res){
    const updatedMeTime = await MeTime.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedMeTime)
}