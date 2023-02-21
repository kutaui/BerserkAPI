require("dotenv").config()


const express = require("express")
const app = express()
const mongoose = require("mongoose")
const port = process.env.port || 2501

mongoose.connect(process.env.DATABASE_URL, { family: 4 })
    .then(() => console.log("connected to atlas"))
    .catch(err => console.log(err))


const db = mongoose.connection
db.on("error", err => console.error(err))
db.once("connected", () => console.log("connectod to database"))

app.use(express.json())

const charactersRouter = require("./routes/characters")
app.use("/characters", charactersRouter)


app.listen(port, () => console.log("server started"))
