const express = require('express')
const product = require('./products')
const user = require('./users')
const categorie = require('./categories')
const sale = require('./sales')
const payment = require('./payment')
const order = require('./orders')

const router = express.Router()

router.use('/public/images', express.static('app/public/images'))

router.use('/products', product)
router.use('/users', user)
router.use('/categories', categorie)
router.use('/sales', sale)
router.use('/payment', payment)
router.use('/order', order)


module.exports = router