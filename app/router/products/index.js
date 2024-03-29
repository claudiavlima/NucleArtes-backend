const express = require('express')
const controller = require('./controller')

const router = express.Router()
const { getAll, insertProduct, upsertProduct, removeProduct, getProductByArtesanoId } = controller

router.use(express.json())

router.get('/', getAll)
router.get('/:id', getProductByArtesanoId)
router.post('/', insertProduct)
router.put('/:id', upsertProduct)
router.delete('/:id', removeProduct)

module.exports = router