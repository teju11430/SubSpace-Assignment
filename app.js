const express = require("express");
const logger = require("./middleware/logger");
const { request } = require("http");
const blogRoute = require('./routes/API/blog.js');

const app = express();

// Init middleware
// app.use(logger);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended :true}));


//API route
app.use('/api', blogRoute);


//Listen to port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));