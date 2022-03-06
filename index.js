require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/carts');
const orderRoute = require('./routes/order');

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {console.log('database connection successfull')})
    .catch((err)=> {console.log(err);
});


app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/product', productRoute);
app.use('/api/cart', cartRoute);
app.use('/api/order', orderRoute);

app.listen(process.env.PORT || 6000, (req, res) => {
    console.log('server is running successfully');
});