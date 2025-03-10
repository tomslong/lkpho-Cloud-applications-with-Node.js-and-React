 // Import the HTTP module
const http = require('http');

// Import the 'today' module
const today = require('./today');

// Define the request listener function
const requestListener = function (req, res) {
    res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'}); // Set the status code to 200 (OK)
    // Send the response with the current date from the 'today' module
    let dateHour = today.getHours();
    let greeting = "现在还不是早上";
    if(dateHour > 6 && dateHour < 12){
        greeting = "早上好";
    }
    else if(dateHour >= 12 && dateHour < 18){
        greeting = "下午好";
    }
    else if(dateHour >= 18 && dateHour < 24){
        greeting = "晚上好";
    }
    res.end(`Hello, ${greeting}`);
};

// Define the port number
const port = 8080;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on the specified port
server.listen(port);
console.log('Server listening on port: ' + port);
