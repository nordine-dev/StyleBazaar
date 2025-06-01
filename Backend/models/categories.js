import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    },
    image:{
        type: String,
        default: ""
    }
})

const Category = mongoose.model.Category || mongoose.model("Category", categorySchema);

export default Category;