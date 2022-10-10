// app.js

const express = require('express');
const connectDB = require('./config/db')
var cors = require('cors');

const app = express();

connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));