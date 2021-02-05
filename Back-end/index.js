const { response } = require('express');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.use(cors());


require('./src/controller/users.controller')(app);
require('./src/controller/posts.controller')(app);
require('./src/controller/comments.controller')(app);

//const userController = require('./src/controller/user.controller')(app)

app.listen(4200 , "localhost", () => {
    console.log("Listening on port 4200");
})
