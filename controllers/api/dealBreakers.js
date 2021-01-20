const DealBreaker = require("../../models/dealBreaker");

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update,
};

// setting all deal breakers to variable and turning variable into json obj
async function index(req, res) {
  const dealBreakers = await DealBreaker.find({}).populate("postedBy");
  res.status(200).json(dealBreakers);
}

// finding individual deal breaker by id and set it to a variable that turns into a json obj
async function show(req, res) {
  const dealBreaker = await DealBreaker.findById(req.params.id);
  res.status(200).json(dealBreaker);
}

// creating a deal breaker from req body, setting to mantra variable, turning variable into json obj
async function create(req, res) {
  req.body.postedBy = req.user._id;
  const dealBreaker = await DealBreaker.create(req.body);
  res.status(201).json(dealBreaker);
}

// deleting deal breaker by id, and setting to variable, and turning variable into a json obj
async function deleteOne(req, res) {
  const deletedDealBreaker = await DealBreaker.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedDealBreaker);
}

// updating deal breaker by id to req body, setting to variable, turning variable into json obj
async function update(req, res) {
  const updatedDealBreaker = await DealBreaker.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedDealBreaker);
}
