const mongoose = require("mongoose")

const Tinder_modelo_match = new mongoose.Schema({
    name: String,
    tagname: String,
    age: Number,
    radius: String,
    img: String,
    description: String,
    gender: String,
    msg: String,
    date: String,
    time: String
})

module.exports = mongoose.model("Tinder_match", Tinder_modelo_match)