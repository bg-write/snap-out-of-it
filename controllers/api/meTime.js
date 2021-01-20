const MeTime = require("../../models/meTime");

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update,
};

// setting all metime to variable and turning variable into json obj
async function index(req, res) {
  const meTime = await MeTime.find({}).populate("postedBy");
  res.status(200).json(meTime);
}

// finding individual metime by id and set it to a variable that turns into a json obj
async function show(req, res) {
  const meTime = await MeTime.findById(req.params.id);
  res.status(200).json(meTime);
}

// creating a metime from req body, setting to mantra variable, turning variable into json obj
async function create(req, res) {
  req.body.postedBy = req.user._id;
  const meTime = await MeTime.create(req.body);
  res.status(201).json(meTime);
}

// deleting metime by id, and setting to variable, and turning variable into a json obj
async function deleteOne(req, res) {
  const deletedMeTime = await MeTime.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedMeTime);
}

// updating metime by id to req body, setting to variable, turning variable into json obj
async function update(req, res) {
  const updatedMeTime = await MeTime.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedMeTime);
}
