/*
This module is used to set up configuration variables for the Node application

 */
var initGlobalConfig = function(){

  var config = {};

  //Port to run the application on
  config.PORT = 3000;


  return config;
};

module.exports = initGlobalConfig();


