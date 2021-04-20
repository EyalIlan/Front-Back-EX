const Product = require('../models/product.model')


const getAllProducts = (req,res) =>{
    Product.find({}).then(resuult =>{
        res.send(resuult)
    })
    .catch(err => console.log(err))
}

const getSpecificProduct = (req,res) =>{

    const {id} = req.params
    console.log(id)
    Product.findById(id)
    .then(result =>{
        res.send(result)
    })
    .catch(err => console.log(err))

}

const getActiveProducts = (req,res) =>{

    const active = req.body.active
    Product.find({isActive:active})
    .then(result =>{
        res.send(result)
    }).catch(err => console.log(err))

}

const getPriceBetween = (req,res) =>{

    Product.find({"details.price":{$lt:150,$gt:30}})
    .then(result =>{
        res.send(result)
    })
    .catch(err => console.log(err))

}


// $gt
// $lt
module.exports = {
    getAllProducts,
    getSpecificProduct,
    getActiveProducts,
    getPriceBetween
}



// find({ $and: [ { "details.price": { $gte: query.min } }, { "details.price": { $lte: query.max } } ] })
//find({age : {$lt :24, $gt : 17}})
