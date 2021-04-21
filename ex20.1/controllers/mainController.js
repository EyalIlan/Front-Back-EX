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

const UpdateProuduct = async (req,res) =>{

    const {id} = req.params

    console.log(id)

    try{
       const product = await Product.findByIdAndUpdate(id,{isActive:true,'details.discount':2000},{new:true,runValidators:true})
       res.send(product)
    }
    catch(e) {
        throw new Error(e)
    }

}

const DeleteSpecificProduct = async (req,res) =>{

    const {id} = req.params
    try{
        const product = await Product.findByIdAndDelete(id)
        res.send(product)
     }
     catch(e) {
         throw new Error(e)
     }
}


const DeleteAllProducts = async (req,res) =>{

    try{
        const products = await Product.deleteMany({})
        res.send(products)
    }
    catch(e){
        throw new Error(e)
    }

}

// $gt
// $lt
module.exports = {
    getAllProducts,
    getSpecificProduct,
    getActiveProducts,
    getPriceBetween,
    UpdateProuduct,
    DeleteSpecificProduct,
    DeleteAllProducts
}



// find({ $and: [ { "details.price": { $gte: query.min } }, { "details.price": { $lte: query.max } } ] })
//find({age : {$lt :24, $gt : 17}})
