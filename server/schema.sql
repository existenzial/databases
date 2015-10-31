CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  ID int(4),
  userID int(4), /* foreign key */
  PRIMARY KEY(ID)/*,*/
  /*FOREIGN KEY(userID)*/
);

CREATE TABLE users (
  userID int(4), /* primary key */
  userName varchar(20),
  PRIMARY KEY(userID)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

