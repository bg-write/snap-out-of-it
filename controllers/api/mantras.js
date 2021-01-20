const Mantra = require("../../models/mantra");

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update,
};

// setting all mantras to variable and turning variable into json obj
async function index(req, res) {
  const mantras = await Mantra.find({}).populate("postedBy");
  res.status(200).json(mantras);
}

// finding individual mantra by id and set it to a variable that turns into a json obj
async function show(req, res) {
  const mantra = await Mantra.findById(req.params.id);
  res.status(200).json(mantra);
}

// creating a mantra from req body, setting to mantra variable, turning variable into json obj
async function create(req, res) {
  req.body.postedBy = req.user._id;
  const mantra = await Mantra.create(req.body);
  res.status(201).json(mantra);
}

// deleting mantra by id, and setting to variable, and turning variable into a json obj
async function deleteOne(req, res) {
  const deletedMantra = await Mantra.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedMantra);
}

// updating mantra by id to req body, setting to variable, turning variable into json obj
async function update(req, res) {
  const updatedMantra = await Mantra.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedMantra);
}
