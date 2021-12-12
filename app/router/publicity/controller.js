const PublicityOne = require('../../models/publicityOne');
const PublicityTwo = require('../../models/publicityTwo');
const PublicityThird = require('../../models/publicityThird');
const PublicityFourth = require('../../models/publicityFourth');
const PublicityFive = require('../../models/publicityFive');


//Get all product method
const getPublicityOne = (req, res) => {
  PublicityOne.find({}, (err, products) => {
    if (err) res.send({ msg: 'can`t get the publicity list', error: err })
    res.send(products)
  })
}

//Get all product method
const getPublicityTwo = (req, res) => {
  PublicityTwo.find({}, (err, products) => {
    if (err) res.send({ msg: 'can`t get the publicity list', error: err })
    res.send(products)
  })
}

//Get all product method
const getPublicityThird = (req, res) => {
  PublicityThird.find({}, (err, products) => {
    if (err) res.send({ msg: 'can`t get the publicity list', error: err })
    res.send(products)
  })
}

//Get all product method
const getPublicityFourth = (req, res) => {
  PublicityFourth.find({}, (err, products) => {
    if (err) res.send({ msg: 'can`t get the publicity list', error: err })
    res.send(products)
  })
}

//Get all product method
const getPublicityFive = (req, res) => {
  PublicityFive.find({}, (err, products) => {
    if (err) res.send({ msg: 'can`t get the publicity list', error: err })
    res.send(products)
  })
}

// Insert product method
const insertPublicityOne = (req, res) => {
  const publicityOne = new PublicityOne({
    title: req.body.title,
    img: req.body.img,
  })
  publicityOne.save(err => {
    if (err) res.send({ msg: 'Cant`t save the publicity', error: err })
    res.send({ msg: 'publicity saved', data: publicityOne })
  })
}

const insertPublicityTwo = (req, res) => {
  const publicityTwo = new PublicityTwo({
    title: req.body.title,
    img: req.body.img,
  })
  publicityTwo.save(err => {
    if (err) res.send({ msg: 'Cant`t save the publicity', error: err })
    res.send({ msg: 'publicity saved', data: publicityTwo })
  })
}

const insertPublicityThird = (req, res) => {
  const publicityThird = new PublicityThird({
    title: req.body.title,
    img: req.body.img,
  })
  publicityThird.save(err => {
    if (err) res.send({ msg: 'Cant`t save the publicity', error: err })
    res.send({ msg: 'publicity saved', data: publicityThird })
  })
}

const insertPublicityFourth = (req, res) => {
  const publicityFourth = new PublicityFourth({
    title: req.body.title,
    img: req.body.img,
  })
  publicityFourth.save(err => {
    if (err) res.send({ msg: 'Cant`t save the publicity', error: err })
    res.send({ msg: 'publicity saved', data: publicityFourth })
  })
}

const insertPublicityFive = (req, res) => {
  const publicityFive = new PublicityFive({
    title: req.body.title,
    img: req.body.img,
  })
  publicityFive.save(err => {
    if (err) res.send({ msg: 'Cant`t save the publicity', error: err })
    res.send({ msg: 'publicity saved', data: publicityFive })
  })
}

// Update product method
const updatePublicityOne = (req, res) => {
  PublicityOne.updateOne({ _id: req.params.id }, { ...req.body }, err => {
    if (err)
      res.send({
        msg: `Can't update the publicity ${req.params.id}`,
        error: err
      })
    res.send({ msg: 'Publicity updated' })
  })
}

// Update product method
const updatePublicityTwo = (req, res) => {
  PublicityTwo.updateOne({ _id: req.params.id }, { ...req.body }, err => {
    if (err)
      res.send({
        msg: `Can't update the publicity ${req.params.id}`,
        error: err
      })
    res.send({ msg: 'Publicity updated' })
  })
}

// Update product method
const updatePublicityThird = (req, res) => {
  PublicityThird.updateOne({ _id: req.params.id }, { ...req.body }, err => {
    if (err)
      res.send({
        msg: `Can't update the publicity ${req.params.id}`,
        error: err
      })
    res.send({ msg: 'Publicity updated' })
  })
}

// Update product method
const updatePublicityFourth = (req, res) => {
  PublicityFourth.updateOne({ _id: req.params.id }, { ...req.body }, err => {
    if (err)
      res.send({
        msg: `Can't update the publicity ${req.params.id}`,
        error: err
      })
    res.send({ msg: 'Publicity updated' })
  })
}

// Update product method
const updatePublicityFive = (req, res) => {
  PublicityFive.updateOne({ _id: req.params.id }, { ...req.body }, err => {
    if (err)
      res.send({
        msg: `Can't update the publicity ${req.params.id}`,
        error: err
      })
    res.send({ msg: 'Publicity updated' })
  })
}

// Remove product method
const removePublicityOne = (req, res) => {
  PublicityOne.findOneAndDelete({ _id: req.params.id }, (err, doc) => {
    if (err) return res.status(500).send(err)
    res.status(200).send(doc)
  })
}

// Remove product method
const removePublicityTwo = (req, res) => {
  PublicityTwo.findOneAndDelete({ _id: req.params.id }, (err, doc) => {
    if (err) return res.status(500).send(err)
    res.status(200).send(doc)
  })
}

// Remove product method
const removePublicityThird = (req, res) => {
  PublicityThird.findOneAndDelete({ _id: req.params.id }, (err, doc) => {
    if (err) return res.status(500).send(err)
    res.status(200).send(doc)
  })
}

// Remove product method
const removePublicityFourth = (req, res) => {
  PublicityFourth.findOneAndDelete({ _id: req.params.id }, (err, doc) => {
    if (err) return res.status(500).send(err)
    res.status(200).send(doc)
  })
}

// Remove product method
const removePublicityFive = (req, res) => {
  PublicityFive.findOneAndDelete({ _id: req.params.id }, (err, doc) => {
    if (err) return res.status(500).send(err)
    res.status(200).send(doc)
  })
}

module.exports = {
  insertPublicityOne,
  insertPublicityTwo,
  insertPublicityThird,
  insertPublicityFourth,
  insertPublicityFive,
  updatePublicityOne,
  updatePublicityTwo,
  updatePublicityThird,
  updatePublicityFourth,
  updatePublicityFive,
  removePublicityOne,
  removePublicityTwo,
  removePublicityThird,
  removePublicityFourth,
  removePublicityFive,
  getPublicityOne,
  getPublicityTwo,
  getPublicityThird,
  getPublicityFourth,
  getPublicityFive
}