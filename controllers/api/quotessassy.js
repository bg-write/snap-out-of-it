const QuotesSassy = require("../../models/quotessassy");

module.exports = {
    index,
    show
}

// setting all quotes to variable and turning variable into json obj
async function index(req,res){
    const quotesSassy = await QuotesSassy.find({})
    res.status(200).json(quotesSassy)
}

// finding individual quote by id and set it to a variable that turns into a json obj
async function show(req, res){
    const quotesSassy = await QuotesSassy.findById(req.params.id)
    res.status(200).json(quotesSassy)
}
