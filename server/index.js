var express = require('express');
var expApp = express();
var config = require('./config/config');



/*expApp.get('/', function (req, res) {
  res.send("Main Page!");

});*/

expApp.use(express.static(__dirname + '\\..\\public'));


expApp.listen(config.PORT, function () {
  console.log('Example app listening on port ' + config.PORT + '!');
});
