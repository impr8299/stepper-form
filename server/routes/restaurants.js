const express = require("express")
const restaurantController = require("../controller/restaurants")
const router = express.Router()

router.get("/restaurants",restaurantController.restaurants)

module.exports = router