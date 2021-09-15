const mongoose = require("mongoose")

const Tinder_modelo_apruebo = new mongoose.Schema({
    name: String,
    tagname: String,
    age: Number,
    radius: String,
    img: String,
    gender: String,
    description: String,
    date: String,
    time: String
})

module.exports = mongoose.model("Tinder_apruebo", Tinder_modelo_apruebo)