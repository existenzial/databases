CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  ID number(4),
  userID number(4) /* foreign key */
);

CREATE TABLE users (
  userID number(4), /* primary key */
  userName varchar(20)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

