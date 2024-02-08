const express = require("express")
const People = require("../models/People")


const router = express.Router()


router.get("/", async (req, res) => {
    try {
        const listofallpeople = await People.find({})

        res.json(listofallpeople)

    } catch (error) {
        res.status(400).json(error)
    }
})

router.post("/", async (req, res) => {
    try {
        res.json(await People.create(req.body))
    } catch(error) {
        res.status(400).json(error)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        res.json(await People.findByIdAndDelete(req.params.id))
    } catch(error) {
        res.status(400).json(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        res.json(await People.findById(req.params.id))
    } catch (err) {
        res.status(400).json(err);
    }
})

router.put('/:id', async (req, res) => {
    try {
        res.json(await People.findByIdAndUpdate(req.params.id, req.body))
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router