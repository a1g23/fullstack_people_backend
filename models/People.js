const mongoose = require("./connection")

// destructure the mongoose package and grab Schema and model methods

const { Schema, model } = mongoose

// create a new Schema labeled as something, define what it looks like
const PeopleSchema = new Schema(
    {
        name: String,
        image: String,
        title: String
    }
)

// use the Schema to create a model
const People = model('People', PeopleSchema)

//export for use
module.exports = People

