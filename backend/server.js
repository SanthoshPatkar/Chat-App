const express=require('express')
const dotenv=require('dotenv');
const connectDB = require('./config/db');

dotenv.config()
connectDB();

const app=express()

const port=process.env.PORT
app.listen(port,console.log(`runs at ${port}`))