var db = require('../db');



// User.sync().success(function(req){
//   var newUser = User.build({username: req.username});

//   newUser.save().success(function(){
//     User.findAll({ where: {username: req.username}}).success(function(users){

//       for (var i = 0; i < users.length; i++) {
//         console.log("--------------users", users[i].username);
//         // do something
//       }
//     })
//   })
// })

// Messages.sync().success(function(req){
//   var newMessage = Message.build({objectID: req.objectID, text: req.text, roomname: req.roomname});

//   newMessage.save().success(function(){
//     Messages.findAll({ where: {objectID: req.objectID}}).success(function())
//   })
// })


module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

