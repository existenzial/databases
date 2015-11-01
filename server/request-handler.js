var utils = require('./utils');
var mysql = require('mysql');

var objectIdCounter = 1;
var messages = [
  // Note: an initial message is useful for debugging purposes.
  /*
  {
    text: 'hello world',
    username: 'fred',
    objectId: objectIdCounter
  }
  */
];


var actions = {
  'GET': function(request, response){
    // read from database
    //Query for Message & Read It
    utils.sendResponse(response, {results: messages});
  },
  'POST': function(request, response){
    // write to database
    //INSERT
    var mysqlInsert = 'INSERT INTO chat.messages (ID, objectID, userID, text) VALUES (null, objectID, username, text)';

    utils.collectData(request, function(message){
      message.objectId = ++objectIdCounter;
      //messages.push(message);
      connection.query(mysqlInsert, function(err, rows, fields){
        if (err) throw err;
        console.log("------------------------------collecting messages");
      });
      utils.sendResponse(response, {objectId: message.objectId}, 201);
    });
  },
  'OPTIONS': function(request, response){
    utils.sendResponse(response, null);
  }
};

exports.requestHandler = utils.makeActionHandler(actions);