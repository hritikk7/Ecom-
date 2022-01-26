require("dotenv").config();
const { listen } = require('express/lib/application')
const express = require("express");  
const connectDB = require("./config/db")
const productRoutes = require('./routes/productRoutes')


connectDB();
const app = express();
app.use(express.json());
app.use('/api/products',productRoutes)
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server running on ${PORT}`))