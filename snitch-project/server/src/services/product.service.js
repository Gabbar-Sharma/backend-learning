import productModel from "../models/product.model.js"

const createProduct = async(productData) =>{
    const product = await productModel.create(productData)
    return product
}




export default {
    createProduct,
}