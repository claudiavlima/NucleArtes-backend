const express = require('express')
const controller = require('./controller')

const router = express.Router()
const { getAll, getByIdArtesano, insertProduct, upsertProduct, removeProduct } = controller

router.use(express.json())

router.get('/', getAll)
router.get('/:id', getByIdArtesano)
router.post('/', insertProduct)
router.put('/:id', upsertProduct)
router.delete('/:id', removeProduct)

module.exports = router