const ProductModel = require('../models/product.model');


const addProduct = (req,res) =>{

    const {name, category, isActive,details} = req.body;
   
    const product = new ProductModel({
        name: name,
        category: category,
        isActive: isActive,
        details:{
            description:details.description,
            price:details.price,
            discount:details.discount,
            images:details.images,
            phone:details.phone
        }

    });
    product.save((err) => {
        if (err) return res.json({"error": err})
        return res.json({"success": product})
    });

}


module.exports = {
    addProduct
}