const express = require('express');
const app = express();
const cors = require('cors');
const blindsRoutes = require('./routes/blinds');
const { intializeApp } = require('firebase-admin/app');
require('dotenv').config();


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/api/blinds', blindsRoutes);


app.listen(process.env.PORT, function (err) {
    if (err) console.log(err);
    console.log("Server is running on PORT", process.env.PORT);
});