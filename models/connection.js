require("dotenv").config()
const mongoose = require("mongoose")

//connect mongoose to DB
mongoose.connect(process.env.DATABASE_URL)


module.exports = mongoose

// DATABASE_URL