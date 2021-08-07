const express = require('express')
const controller = require('./controller')

const router = express.Router()
const { getOrders, postOrder, getOrderById, cancelOrder } = controller;

router.use(express.json())

router.get('/', getOrders);
router.get('/:id', getOrderById);
router.post('/', postOrder);
router.patch('/cancel-order/:id', cancelOrder)

module.exports = router;
