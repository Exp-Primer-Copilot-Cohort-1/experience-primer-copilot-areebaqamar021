// Create web server

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var comments = [
    { name: 'Tobi', comment: 'I love Node.js' },
    { name: 'Loki', comment: 'I love playing Mortal Kombat' },
    { name: 'Jane', comment: 'I love horses' }
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/comments', function(req, res) {
    res.json(comments);
});

app.post('/comments', function(req, res) {
    var comment = req.body;
    comments.push(comment);
    res.json(comment);
});

app.listen(3000);

// Run the server
// node comments.js

// Open the browser and type http://localhost:3000
// The browser will display the content of the comments array

// To send a POST request, use curl
// curl -X POST -d "name=John&comment=I love this article" http://localhost:3000/comments
// The server will add the comment to the comments array

// To view the comments, open the browser and type http://localhost:3000
// The browser will display the content of the comments array including the new comment

// To send a GET request, use curl
// curl http://localhost:3000/comments
// The server will return the content of the comments array

// To stop the server, press ctrl + c

// To run the server in production mode, use the following command
// NODE_ENV=production node comments.js

// To run the server in development mode, use the following command
// NODE_ENV=development node comments.js

// To change the port, use the following command
// PORT=8080 node comments.js

// To change the IP, use the following command
// IP=