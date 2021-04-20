const mongoose = require('mongoose')
const Validator = require('validator')

const ProductSchema =  mongoose.Schema({
    name:{
        type:String,
        required:false,
        unique:true
    },
    category:{
        type:String,
        required:true,
        unique:false
    },
    isActive:{
        type:Boolean,
        required:false,
        unique:false,
        default:false
    },
    details:{
        description:{
            type:String,
            required:true,
            unique:false,
            validate(value) {
                if(value.length <= 10){
                    throw new Error('description must have 10 charcters')
                }
            }
        },
        price:{
            type:Number,
            required:true,
            validate(value){
                if(value < 0){
                    throw new Error('price must be a positive number')
                }
            }
        },
        discount:{
            type:Number,
            required:false,
            default:0
        },
        images:{
            type:[String],
            validate(value){
                if(value.length < 2){
                    throw new Error('must insert 2 images')
                }
            }
        },
        phone:{
            type:String,
            validate(value){

                if (!Validator.isMobilePhone(value, "he-IL")){
                    throw new Error('Must be isreli phone')
                }
            }
        },
        DateAdded:{
            type:Date,
            default:new Date()
        }
        
    }
})

const e_commerce  = mongoose.model('e-commerce',ProductSchema);
module.exports= e_commerce;