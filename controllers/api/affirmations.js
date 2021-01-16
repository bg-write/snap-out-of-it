const { deleteOne } = require("../../models/affirmation");
const Affirmation = require("../../models/affirmation");

module.exports = {
    index,
    show,
    create,
    delete: deleteOne,
    update
;}

// setting all affirmations to variable and turning variable into JSON
async function index(req, res) {
    const affirmations = await Affirmation.find({})
    res.status(200).json(affirmations)
};

