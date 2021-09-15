const express = require("express");
const router = express.Router()
const Modelo_rechazo = require("../models/Model_rechazo")

//RECIBIR TODAS LAS RUTAS
router.get("/all", async (req, res) => {
    const tinder = await Modelo_rechazo.find();
    res.json(tinder)
})

//CREAR NUEVA CITA
router.post("/new", async (req, res) => {
    const newElement = new Modelo_rechazo (req.body)
    const saveElement = await newElement.save()
    res.json(saveElement)
});

//OBTENER CITA ESPECIFICA
router.get("/get/:id", async (req, res) => {
    const q = await Modelo_rechazo.findById({_id: req.params.id})
    res.json(q)
})

//ELIMINAR CITA
router.delete("/delete/:id", async (req, res) => {
    const result = await Modelo_rechazo.findByIdAndDelete({_id: req.params.id});
    res.json(result)
})

//ACTUALIZAR CITA
router.patch("/update/:id", async (req, res) => {
    const q = await Modelo_rechazo.updateOne({_id: req.params.id}, {$set: req.body});
    res.json(q);
})

//GET CITA RANDOM
router.get("/random", async (req, res) => {
    const count = await Modelo_rechazo.countDocuments();
    const random = Math.floor(Math.random() * count);
    const q = await Modelo_rechazo.findOne().skip(random);
    res.json(q)
})

module.exports = router;