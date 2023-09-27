// Import necessary modules
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

// Create an Express application
const app = express();

// Configure MySQL database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kerlys_shop'
});

// Connect to the database
db.connect(err => {
    if (err) {
        console.error('Database connection error: ' + err.stack);
        return;
    }
    console.log('Connected to database as id ' + db.threadId);
});

// Middleware to parse JSON data
app.use(express.json());
app.use(cors());

// API endpoint to handle form submissions
app.post('/subscribe', (req, res) => {
    const { first_name, last_name, email_address } = req.body;

    // Insert data into the subscribers table
    const sql = 'INSERT INTO subscribers (first_name, last_name, email_address) VALUES (?, ?, ?)';
    db.query(sql, [first_name, last_name, email_address], (err, result) => {
        if (err) {
            console.error('Database insertion error: ' + err.stack);
            res.status(500).json({ error: 'An error occurred while subscribing.' });
            return;
        }
        res.status(200).json({ message: 'Subscription successful.' });
    });
});

// Start the server
const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
