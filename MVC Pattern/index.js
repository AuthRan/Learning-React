const express = require('express');
const mongoose = require('mongoose');
const enquiryRoutes = require('./app/routes/web/enquiryRoutes.js');
require('dotenv').config();
const app = express();

app.use(express.json());
app.use("/web/api/enquiry", enquiryRoutes)
mongoose.connect(process.env.DBURL)
.then(() => {
    console.log("Connection to mongoDB established");
    app.listen(process.env.PORT, () => {
        console.log("Server is listeing on port "+process.env.PORT);
    })
})

