var express = require('express');

var port = 1000;
var cors = require('cors');
var bodyparser = require('body-parser'); 

app = express()

/**payment processor */
app.use(express.json());

//enables cors
app.use(cors());

app.use(bodyparser.json())

app.use(require('./src/controllers'));

app.listen(port, () => {
   console.log("server starting on port : " + port)
});




 
 