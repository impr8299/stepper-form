const express = require('express')
const path = require('path')
const app = express()
require("dotenv").config()
const { DB_CONNECTION } = require('./config/db')
const port = process.env.PORT
const main = require("./routes/main")
const restaurants = require("./routes/restaurants")
const cors = require("cors");

app.use(express.json())
app.use(cors({ origin: "*"}))
app.use("/api",main)
app.use("/external",restaurants)

app.use('/exports', express.static(path.join(__dirname, 'exports')));

app.listen(port, () => {
  console.log(`app running on port ${port}`)
})