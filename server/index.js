var express = require('express');
var expApp = express();
var config = require('./config/config');
var expressHbs = require('express-handlebars');

expApp.engine('hbs', 
          expressHbs(
              {extname        : 'hbs',         
              layoutsDir      : 'views/layouts/',
              partialsDir     : 'views/partials/'}
          ));
expApp.set('view engine', 'hbs');

/*expApp.get('/', function (req, res) {
  res.send("Main Page!");

});*/

expApp.use(express.static(__dirname + '\\..\\public'));


expApp.listen(config.PORT, function () {
  console.log('Example app listening on port ' + config.PORT + '!');
});
