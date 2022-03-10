import Order from '../models/orderModel.js';
import asyncHandler from 'express-async-handler';

// @desc   Create new order
// @route  POST/api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
    const { orderItems, shippingAddress, paymentMethod, subtotal, shippingPrice, taxPrice, totalPrice } = req.body;
    if (orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error('No items in order!');
    } else {
        const order = new Order({
            user: req.user._id,
            orderItems,
            shippingAddress,
            paymentMethod,
            subtotal,
            shippingPrice,
            taxPrice,
            totalPrice
        });
        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
    };
});

export { addOrderItems };