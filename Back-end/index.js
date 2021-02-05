const { response } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());


require('./src/controller/users.controller')(app);

//const userController = require('./src/controller/user.controller')(app)

app.listen(4200 , "localhost", () => {
    console.log("Listening on port 4200");
})
