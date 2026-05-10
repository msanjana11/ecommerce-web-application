const express = require("express");
const Product = require("../models/Product");

const router = express.Router();


// GET ALL PRODUCTS
router.get("/", async (req, res) => {

    try {

        const products = await Product.find();

        res.status(200).json(products);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// ADD PRODUCT
router.post("/add", async (req, res) => {

    try {

        const { name, price, image, description } = req.body;

        const newProduct = new Product({
            name,
            price,
            image,
            description
        });

        await newProduct.save();

        res.status(201).json({
            message: "Product added successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// DELETE PRODUCT
router.delete("/:id", async (req, res) => {

    try {

        await Product.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Product deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;