require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const PeopleRouter = require("./controllers/people")

const app = express()

// middleware

app.use(cors())
app.use(morgan('dev'))
app.use(express.json()) // this middleware allows us to send JSON request with req 

//routes

app.use("/people", PeopleRouter)



app.get("/", (req, res) => {
    res.send("hello")
})



const PORT = process.env.PORT
app.listen(PORT, () => console.log("listening on 3000"))