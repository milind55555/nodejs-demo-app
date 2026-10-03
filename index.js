// Import the express module
const express = require('express');

// Initialize the Express application
const app = express();

// Define a port number
const port = 3000;

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// 1. Basic GET Route (Root)
app.get('/', (req, res) => {
    res.send('Hello World from Express,containerized Application!!');
});

// 2. GET Route with URL Parameters
app.get('/user/:name', (req, res) => {
    const userName = req.params.name;
    res.send(`Welcome back, ${userName}!`);
});
// 3. POST Route (Accepting JSON data)
app.post('/api/data', (req, res) => {
    const receivedData = req.body;
    res.json({
        message: 'Data received successfully!',
        yourData: receivedData
    });
});

// 4. Custom 404 Catch-all Route
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
