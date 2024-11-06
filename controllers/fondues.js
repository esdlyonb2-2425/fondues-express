const Fondue = require('../models/Fondue');


async function index(req, res) {
    let fondues = await Fondue.find({})
    res.send(fondues);
}

async function create(req, res) {
    let {...data} = req.body
    await Fondue.create({...data})
    res.send("Apparition nouvelle fondue")
}


module.exports = {index, create};