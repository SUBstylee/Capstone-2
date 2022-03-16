import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

// @desc   Fetch all products
// @route  GET/api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
    const keyword = req.query.keyword ? {
        $or: [
            {
                name: {
                    $regex: req.query.keyword,
                    $options: 'i'
                },
            },
            {
                brand: {
                    $regex: req.query.keyword,
                    $options: 'i'
                },
            },
            {
                category: {
                    $regex: req.query.keyword,
                    $options: 'i'
                },
            },
            {
                description: {
                    $regex: req.query.keyword,
                    $options: 'i'
                },
            },
        ]

    } : {};
    const products = await Product.find({ ...keyword });
    res.json(products);
});

// @desc   Fetch a single product
// @route  GET/api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error('Product not found');
    };
});

// @desc   Delete a product
// @route  DELETE/api/products/:id
// @access Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        await product.remove();
        res.json({ message: 'Product removed!' })
    } else {
        res.status(404);
        throw new Error('Product not found');
    };
});

// @desc   Create a product
// @route  POST/api/products
// @access Private/Admin
const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
        name: 'Sample Name',
        price: 0,
        user: req.user._id,
        image: '/assets/images/shop-img/sample.png',
        brand: 'Sample Brand',
        category: 'Sample Category',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample Description',
    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});

// @desc   Update a product
// @route  PUT/api/products:id
// @access Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
    const { name, price, description, image, brand, category, countInStock } = req.body;
    const product = await Product.findById(req.params.id);
    if (product) {
        product.name = name;
        product.price = price;
        product.description = description;
        product.image = image;
        product.brand = brand;
        product.category = category;
        product.countInStock = countInStock;
        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404);
        throw new Error('Product not found!');
    };
});

// @desc   Create a new review
// @route  POST/api/products:id/reviews
// @access Private
const createProductReview = asyncHandler(async (req, res) => {
    const { rating, comment } = req.body;
    const product = await Product.findById(req.params.id);
    if (product) {
        //check if user has already reviewed this item
        const alreadyReviewed = product.reviews.find(rev => rev.user.toString() === req.user._id.toString());
        //check customer order to make sure they have purchased this item
        const orders = await Order.find({ user: req.user._id });
        const ordersItems = [].concat.apply(
            [],
            orders.map(order => order.orderItems.map(item => item.product.toString()))
        );
        if (product) {
            const hasPurchased = ordersItems.includes(product._id.toString());
            if (!hasPurchased) {
                res.status(400);
                throw new Error('You can only review items you have purchased!');
            };
        };
        if (alreadyReviewed) {
            res.status(400);
            throw new Error('You can only review each product once!');
        };
        const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id,
        };
        product.reviews.push(review);
        product.numReviews = product.reviews.length;
        product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;
        await product.save();
        res.status(201).json({ message: 'Review added!' });
    } else {
        res.status(404);
        throw new Error('Product not found!');
    };
});

export { getProducts, getProductById, deleteProduct, createProduct, updateProduct, createProductReview };