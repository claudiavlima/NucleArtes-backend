const express = require('express')
const controller = require('./controller')

const router = express.Router()
const {
  getPublicityOne,
  getPublicityTwo,
  getPublicityThird,
  getPublicityFourth,
  getPublicityFive,
  insertPublicityOne,
  insertPublicityTwo,
  insertPublicityThird,
  insertPublicityFourth,
  insertPublicityFive,
  removePublicityOne,
  removePublicityTwo,
  removePublicityThird,
  removePublicityFourth,
  removePublicityFive,
  updatePublicityOne,
  updatePublicityTwo,
  updatePublicityThird,
  updatePublicityFourth,
  updatePublicityFive,
} = controller

router.use(express.json())

router.get('/publicityOne', getPublicityOne)
router.get('/publicityTwo', getPublicityTwo)
router.get('/publicityThird', getPublicityThird)
router.get('/publicityFourth', getPublicityFourth)
router.get('/publicityFive', getPublicityFive)


router.post('/publicityOne', insertPublicityOne)
router.post('/publicityTwo', insertPublicityTwo)
router.post('/publicityThird', insertPublicityThird)
router.post('/publicityFourth', insertPublicityFourth)
router.post('/publicityFive', insertPublicityFive)

router.put('/publicityOne/:id', updatePublicityOne)
router.put('/publicityTwo/:id', updatePublicityTwo)
router.put('/publicityThird/:id', updatePublicityThird)
router.put('/publicityFourth/:id', updatePublicityFourth)
router.put('/publicityFive/:id', updatePublicityFive)

router.delete('/publicityOne/:id', removePublicityOne)
router.delete('/publicityTwo/:id', removePublicityTwo)
router.delete('/publicityThird/:id', removePublicityThird)
router.delete('/publicityFourth/:id', removePublicityFourth)
router.delete('/publicityFive/:id', removePublicityFive)

module.exports = router