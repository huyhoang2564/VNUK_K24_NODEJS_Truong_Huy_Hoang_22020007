const express = require("express");
const router = express.Router();

const {
    createFood,
    getFoodById,
    updateFood,
    deleteFood
} = require("../controllers/food.controller");

router.route("/")
    .post(createFood)
    .get(getFoodById);

router.route("/:id")
    .patch(updateFood)
    .delete(deleteFood);

module.exports = router;