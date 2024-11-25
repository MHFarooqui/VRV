const pgp = require('pg-promise')();
require('dotenv').config();

const db = pgp({
  database: process.env.DATABASE,
  user: process.env.DB_USER, 
  password: process.env.DB_PASSWORD, 
  host: process.env.DB_HOST, 
  port: process.env.DB_PORT,
  ssl: false,
});

const connectDb = () => {
  db.connect()
    .then(obj => {
      console.log('Connected to the sql database');
      obj.done();
    })
    .catch(error => {
      console.error('Error connecting to the database:', error);
    });
}

module.exports = { connectDb, db };