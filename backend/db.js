const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", // Use your phpMyAdmin password
    database: "libro_tech",
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed: " + err.message);
        return;
    }
    console.log("✅ Connected to MySQL Database!");
});

module.exports = db;
