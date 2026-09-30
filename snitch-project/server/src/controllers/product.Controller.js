import productService from "../services/product.service";

const createProduct = async(req, res, next) =>{
    try{
    const createProduct = await productService.createProduct({
        ...req.body,
        seller: req.user._id
        
    })

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: {
        product,
      },
    });
    }
    catch(error){
      next(error)
    }
}

export default {
  createProduct,
};