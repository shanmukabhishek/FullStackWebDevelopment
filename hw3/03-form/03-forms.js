const express = require('express');
const app = express();
const port = 5000;

// Setting up the public directory
app.use('D:/us/Portland State University/Full Stack/webdev-exercises/hw3/03-form/index.html',express.static('03-form.js'));

app.listen(port, () => console.log(`listening on port ${port}!`));