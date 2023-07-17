const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const BASE_URL = process.env.BASE_URL;

const port = 8000;

const app = express()

const db = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "Mysql",
  database: "rock2",
  port: 3306,
});

app.use(express.json())

// Middleware
app.use(bodyParser.json());
app.use(cors())

app.get("/", (req, res) => {
  res.json("This is the API for STACKMERN");
});

// contact form route
app.post('/contact', (req, res) => {
  try {
    const { name, email, msg, phone, pan, gst, kyc_update, state, prod_details, details } = req.body;
    console.log(prod_details)
    console.log(details)
    const q = 'INSERT INTO contact (name, email, msg, phone, pan, gst, kyc_update, state, prod_details, details) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [name, email, msg, phone, pan, gst, kyc_update, state, prod_details, details];

    db.query(q, values, (err, data) => {
      if (err) {
        console.error('Error during contact form submission:', err);
        return res.status(500).json({ success: false, message: 'An error occurred during form submission' });
      }

      res.status(200).json({ success: true, message: 'Message sent successfully' });
    });
  } catch (error) {
    console.error('Error during contact form submission:', error);
    res.status(500).json({ success: false, message: 'An error occurred during form submission' });
  }
});



app.listen(port, () => {
  console.log(`Connected to backend on port ${port}`)
});


