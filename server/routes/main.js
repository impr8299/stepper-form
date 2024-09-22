const express = require("express")
const orderController = require("../controller/order")
const router = express.Router()

router.post("/order/store",orderController.store_order)
router.post("/order/pending",orderController.pending_order)
router.post("/order/all",orderController.all_order)
router.post("/order/exportAllOrder",orderController.export_all_order)

module.exports = router