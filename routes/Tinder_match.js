const express = require("express");
const router = express.Router()
const Modelo_match = require("../models/Model_match")

//RECIBIR TODAS LAS RUTAS
router.get("/all", async (req, res) => {
    const tinder = await Modelo_match.find();
    res.json(tinder)
})

//CREAR NUEVA CITA
router.post("/new", async (req, res) => {
    const newElement = new Modelo_match (req.body)
    const saveElement = await newElement.save()
    res.json(saveElement)
});

//OBTENER CITA ESPECIFICA
router.get("/get/:id", async (req, res) => {
    const q = await Modelo_match.findById({_id: req.params.id})
    res.json(q)
})

//ELIMINAR CITA
router.delete("/delete/:id", async (req, res) => {
    const result = await Modelo_match.findByIdAndDelete({_id: req.params.id});
    res.json(result)
})

//ACTUALIZAR CITA
router.patch("/update/:id", async (req, res) => {
    const q = await Modelo_match.updateOne({_id: req.params.id}, {$set: req.body});
    res.json(q);
})

//GET CITA RANDOM
router.get("/random", async (req, res) => {
    const count = await Modelo_match.countDocuments();
    const random = Math.floor(Math.random() * count);
    const q = await Modelo_match.findOne().skip(random);
    res.json(q)
})

module.exports = router;