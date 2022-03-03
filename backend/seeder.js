import mongoose from "mongoose";
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from "./models/userModel.js";
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData=async()=>{
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();
        const createdUser=await User.insertMany(users);
        const adminUser=createdUser[0]._id;
        const sampleProducts=products.map(product=>{
            return {...product, user: adminUser};
        });
        await Product.insertMany(sampleProducts)
        console.log('Data Imported!'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`.red.inverse);
        process.exit(1);
    };
};

const destroyData=async()=>{
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();
        console.log('Data Destroyed!'.yellow.inverse);
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`.red.inverse);
        process.exit(1);
    };
};

// use 'npm run data:destroy' to destroy data
// use 'npm run data:import' to import data

if(process.argv[2]==='-d'){
    destroyData();
}else{
    importData();
};