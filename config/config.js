const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
  host: process.env.MYSQLHOST || process.env.DB_HOST || 'localhost',
  user: process.env.MYSQLUSER || process.env.DB_USER || 'root',
  password: process.env.MYSQLPASSWORD || process.env.DB_PASSWORD || '',
  database: process.env.MYSQLDATABASE || process.env.DB_NAME || 'my_db',
  port: process.env.MYSQLPORT || process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  // Railway specific SSL configuration
  ssl: {
    rejectUnauthorized: false
  }
});

// Improved connection test with promise
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    // Retry logic or exit process if needed
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.log('Database connection was closed.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.log('Database has too many connections.');
    }
    if (err.code === 'ECONNREFUSED') {
      console.log('Database connection was refused.');
    }
    return;
  }
  
  console.log('Connected to the database as ID:', connection.threadId);
  connection.release();
});

// For promise-based queries
module.exports = pool.promise();