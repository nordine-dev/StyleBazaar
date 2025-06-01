import mongoose from "mongoose"

const productShema = mongoose.Schema({
    name: {
        type:String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required:true,
        trim: true
    },
    salePrice: {
        type:Number,
        required: false,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    categoryName:{
        type: String,
        required : true,
        trim: true
    },
    rating:{
        type: Number,
        required: true,
        trim: true,
        default: 0
    },
    image:{
        type:String,
        required:true,
        trim:true,
        default:"noImage.png"
    }
})

const Product = mongoose.models.Product || mongoose.model("Product", productShema);

export default Product