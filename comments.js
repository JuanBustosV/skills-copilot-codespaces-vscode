// Create web server
// 1. Import express
const express = require('express');
// 2. Create an express application object
const app = express();
// 3. Define a route
app.get('/', (req, res) => {
  res.send('Hello World');
});
// 4. Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
// 5. Export the app object
module.exports = app;