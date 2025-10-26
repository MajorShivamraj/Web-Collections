const http = require("http");

// Create the server

const server = http.createServer((req,res)=>{
    // log request details...
    console.log(`Received Request ${req.method} request for ${req.url}`);
    
    // Set status code fr headers...
    res.writeHead(200,{"content-type":"text/plain"})

    // Send the response...
    res.end("Hello world, this is my first node js server");
})

// define PORT
const PORT = 5000;
// Start Server..
server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
    console.log("Press ctrl+c to stop server.")
    
})
