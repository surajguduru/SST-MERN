const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config()

const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')

app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Db Connected");
    })
    .catch((err) => {
        console.log("Db connection Failed", err);
    });

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.listen(3000, () => {
    console.log("Server sarted at port http://localhost:3000");
});