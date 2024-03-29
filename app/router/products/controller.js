const Product = require('../../models/product')

//Get all product method
const getAll = (req, res) => {
    Product.find({}, (err, products) => {
        if (err) res.send({ msg: 'can`t get the product list', error: err })
        res.send(products)
    })
}

// Get proveedor id product method
const getProductByArtesanoId = (req, res) => {
    Product.find({ artesanoId: req.params.id }, (err, products) => {
        if (err)
            res.send({ msg: `Cant't get the product ${req.params.id}`, error: err })
        res.send(products)
    })
}

// Insert product method
const insertProduct = (req, res) => {
    console.log(req.body)
    const product = new Product({
        _id: req.body._id,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
        img: req.body.img,
        artesanoId: req.body.artesanoId,
        categoryName: req.body.categoryName
    })
    product.save(err => {
        if (err) res.send({ msg: 'Cant`t save the product', error: err })
        res.send({ msg: 'product saved', data: product })
    })
}

// Upsert product method 
const upsertProduct = (req, res) => {
    Product.updateOne({ _id: req.params.id }, { ...req.body }, err => {
        if (err)
            res.send({
                msg: `Cant't upsert the product ${req.params.id}`,
                error: err
            })
        res.send({ msg: 'Product upserted' })
    })
}

// Remove product method
const removeProduct = (req, res) => {
    Product.findOneAndDelete({ _id: req.params.id }, (err, doc) => {
        if (err) return res.status(500).send(err)
        res.status(200).send(doc)
    })
}

module.exports = {
    getAll,
    getProductByArtesanoId,
    insertProduct,
    upsertProduct,
    removeProduct
}