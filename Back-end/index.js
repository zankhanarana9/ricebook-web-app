const { response } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
// app.use(function(req,res,next) {
//     res.header("Access-Control-Allow-Origin",
//         "http://localhost:4200");
//     res.header("Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type,Accept");
//         res.header("Access-Control-Allow-Methods",
//         "GET, POST, PUT, DELETE, OPTIONS");
//     res.header("Access-Control-Allow-Credentials", "true");
//     next();
// });

require('./src/controller/user.controller')(app);
//const userController = require('./src/controller/user.controller')(app)

app.listen(4200 , "localhost", () => {
    console.log("Listening on port 4200");
})
