const foodModel = require("../models/food.model");


const foodController = {
    getData: async (req, res) => {
        try {
            // Gọi API sử dụng fetch
            const response = await fetch('http://localhost:3000/api/foods');
            const dataFood = await response.json();
            
            // Truyền dữ liệu vào view EJS
            res.render('food', { dataFood });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error fetching data');
        }
    },

    // Get a single food item by ID
    getFoodById: async (req, res) => {
        try {
            const categories = await foodModel.find();
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).send('Error fetching categories');
        }
    },

    // Create a new food item
    createFood: async (req, res) => {
        const body = req.body;
        try {
            const newCategory = await foodModel.create(body);
            res.status(200).json(newCategory);
        } catch (error) {
            res.status(500).send('Error creating food');
        }
    },

    // Update a food item
    updateFood: async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        try {
            const updatedCategory = await foodModel.findByIdAndUpdate(id, body, { new: true });
            res.status(200).json(updatedCategory);
        } catch (error) {
            res.status(500).send('Error updating category');
        }
    },

    // Delete a food item
    deleteFood: async (req, res) => {
        const id = req.params.id;
        try {
            const deletedCategory = await foodModel.findByIdAndDelete(id);
            res.status(200).json(deletedCategory);
        } catch (error) {
            res.status(500).send('Error deleting category');
        }
    }
};

module.exports = foodController;