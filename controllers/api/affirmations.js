const Affirmation = require("../../models/affirmation");

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update,
};

// setting all affirmations to variable and turning variable into JSON
async function index(req, res) {
  // console.log("req.user -->", req.user)
  const affirmations = await Affirmation.find({})
    // More efficient way to do it in next line only passing user.
    // const affirmations = await Affirmation.find({ "_id": req.user._id })
    .populate("postedBy");
  res.status(200).json(affirmations);
}

// finding individual affirmation by id and set it to a variable that turns into a json obj
async function show(req, res) {
  const affirmation = await Affirmation.findById(req.params.id);
  res.status(200).json(affirmation);
}

// creating a affirmation from req body, setting to affirmation variable, turning variable into json obj
async function create(req, res) {
  req.body.postedBy = req.user._id;
  const affirmation = await Affirmation.create(req.body);
  res.status(201).json(affirmation);
}

// deleting affirmation by id, and setting to variable, and turning variable into a json obj
async function deleteOne(req, res) {
  const deletedAffirmation = await Affirmation.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedAffirmation);
}

// updating affirmation by id to req body, setting to variable, turning variable into json obj
async function update(req, res) {
  const updatedAffirmation = await Affirmation.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedAffirmation);
}
