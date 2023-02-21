const express = require("express")
const router = express.Router()
const Character = require("../models/character")



router.get("/", async (req, res) => {
    try {
        const characters = await Character.find()
        res.json(characters)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get("/:id", getCharacter, (req, res) => {
    res.json(res.character)
})


// router.post("/", async (req, res) => {
//     const character = new Character({
//         name: req.body.name,
//         about: req.body.about,
//         abilities: req.body.abilities,
//         image: req.body.image,
//         _id: req.body._id
//     })
//     try {
//         const newCharacter = await character.save()
//         res.status(201).json(newCharacter)
//     } catch (err) {
//         res.status(400).json({ message: err.message })
//     }
// })


async function getCharacter(req, res, next) {
    let character
    try {
        character = await Character.findById(req.params.id)
        if (character == null) {
            return res.status(404).json({ message: "Cannot find character" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.character = character
    next()

}

module.exports = router