const QuotesEmpathy = require("../../models/quotesEmpathy");

module.exports = {
    index,
    show
}

// setting all quotes to variable and turning variable into json obj
async function index(req,res){
    const quotesEmpathy = await QuotesEmpathy.find({})
    res.status(200).json(quotesEmpathy)
}

// finding individual quote by id and set it to a variable that turns into a json obj
async function show(req, res){
    const quotesEmpathy = await QuotesEmpathy.findById(req.params.id)
    res.status(200).json(quotesEmpathy)
}
