var mysql = require('mysql');
var Sequelize = require('Sequelize');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var sequelize = new Sequelize("chat", "root", "tga");

var Messages = sequelize.define('Messages', {
  objectID: Sequelize.INTEGER,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

var User = sequelize.define('User', {
  userID: Sequelize.INTEGER,
  username: Sequelize.STRING
});

// connects tables together
User.hasMany(Messages);
Messages.belogsTo(User);

User.sync();
Messages.sync();

exports.User = User;
exports.Messages = Messages;


// un-comment this code for non-orm/sequelized version
// exports.connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "tga",
//   database: "chat"
// });

// exports.connection.connect(function(){
//   console.log("connected!");
// });

