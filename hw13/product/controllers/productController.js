const Product = require('../models/Product');																	
																	
// Lấy tất cả sản phẩm																	
exports.getAllProducts = async (req, res) => {																	
try {																	
const products = await Product.find();																	
res.status(200).json(products);																	
} catch (error) {																	
res.status(500).json({ message: error.message });																	
}																	
};																	
																	
// Thêm sản phẩm mới																	
exports.createProduct = async (req, res) => {									
    const product = new Product({									
    name: req.body.name,									
    description: req.body.description,									
    price: req.body.price,									
    image: req.file.path									
    });									
    try {									
    const savedProduct = await product.save();									
    res.status(201).json(savedProduct);									
    } catch (error) {									
    res.status(400).json({ message: error.message });									
    }									
    };																									
																																		
exports.updateProduct = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, body, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).send('Error updating category');
    }
},																	
																	
exports.deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        res.status(200).json(deletedProduct);
    } catch (error) {
        res.status(500).send('Error deleting category');
    }
}																