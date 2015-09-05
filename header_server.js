// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to print out the headers received.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("uri: " + request.uri + "\n");
  for (header in request.headers) {
    response.write(header + ": " + request.headers[header] + "\n");
  }
  response.end("\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");

