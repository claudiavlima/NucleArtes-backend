const Sale = require('../../models/sale')

// Get all sales method
const getAll = (req, res) => {
    Sale.find({},(err, sales) => {
        if (err) res.send({ msg: 'can`t get the sales list', error: err })
        res.send(sales)
    })
}

// Insert sales method
const insertSale = (req, res) => {
    const sale = new Sale ({
        client: req.body.client,
        total: req.body.total,
        products: req.body.products,
        date: req.body.date,
    })
    sale.save(err => {
        if (err) res.send({ msg: 'Cant`t save the sale', error: err })
        res.send({ msg: 'sale saved', data: sale })
    })
    console.log(sale)
}

module.exports = {
    getAll,
    insertSale,
}