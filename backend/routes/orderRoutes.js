const express = require("express");
const Order = require("../models/Order");

const router = express.Router();


// PLACE ORDER
router.post("/place", async (req, res) => {

    try {

        const { userId, products, totalAmount } = req.body;

        const newOrder = new Order({
            userId,
            products,
            totalAmount
        });

        await newOrder.save();

        res.status(201).json({
            message: "Order placed successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// GET ALL ORDERS
router.get("/", async (req, res) => {

    try {

        const orders = await Order.find();

        res.status(200).json(orders);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;