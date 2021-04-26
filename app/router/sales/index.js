const express = require('express')
const controller = require('./controller')

const router = express.Router()
const { getAll, insertSale } = controller

router.use(express.json())

router.get('/', getAll)
router.post('/',insertSale)

module.exports = router