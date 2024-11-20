const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

// Serve static files from the "client" folder
app.use(express.static(path.join(__dirname, '../client')));

// Default route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
