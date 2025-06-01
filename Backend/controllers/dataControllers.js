import Category from "../models/categories.js";
import Product from "../models/products.js";

export const addProduct = async (req, res)=> {
    const {name, price, description, categoryName} = req.body;
    const image = req.file ? req.file.filename: null;

    if(!name || !price || !description || !categoryName || !image){
        return res.status(400).json({
            success: false,
            message: "Please fill all the fields"
        })
    }
    try {
        const product = await Product.create({
            name,
            price,
            description,
            categoryName,
            image
        });

        return res.status(201).json({
            success: true,
            message: "Product added successfully",
            product: product
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }

}


export const getData = async (req, res)=>{
    const products = await Product.find({})
        const categories = await Category.find({});

    if(!products){
        return res.status(404).json({
            success:false,
            message:"No Products found"
        })
    }
    return res.status(200).json({
        success:true,
        products: products,
        categories : categories
    })
}



