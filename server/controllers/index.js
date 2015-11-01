var models = require('../models');
var bluebird = require('bluebird');

// var messageCol = ['objectID', 'text', 'roomname'];
// var userCol = ['userID', 'username'];

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) throw err;
        res.json(results);
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var messageData = [req.body[text], req.body[username], req.body[roomname]];

      models.messages.post(messageData, function(err, results) {
        if (err) throw err;
        res.json(results);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) throw err;
        res.json(results);
      })
    },
    post: function (req, res) {
      var userData = [req.body[username]];

      models.users.post(userData, function(err, results){
        if (err) throw err;
        res.json(results);
      })
    }
  }
};

