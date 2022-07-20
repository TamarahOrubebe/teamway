// LOAD DEPENDENCIES
// const express = require('express');
// const cors = require('cors');
// const morgan = require('morgan');
// const ejs = require("ejs");
const createServer = require('./server');
const PORT = process.env.PORT || 3000;
const app = createServer();


app.listen(PORT, (req, res) => console.log(`Server started on port ${PORT}`));



