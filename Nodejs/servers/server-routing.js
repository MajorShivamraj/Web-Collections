const http = require("http")

// now create the server logic..
const server = http.createServer((req,res)=>{

    res.setHeader("content-type","text/plain")

    // req.url= returns what path the user is requesting for weither its a home("/") /about ("/about") /contactus ("/contact us") 
    if(req.url==="/" && req.method === "GET"){
        res.statusCode=200;
        res.end("Welcome to Home Page..")
    }
    else if(req.url==="/about" && req.method==="GET"){
        res.statusCode=200;
        res.end("Welcome to About Page..")
    }
    else if(req.url==="/contact" && req.method==="GET"){
        res.statusCode=200;
        res.end("Contact us on Email");
    }
    else{
        res.statusCode=404;
        res.end("404-Page Not Found")
    }
})

const PORT = 5000;
server.listen(PORT,()=>{
    console.log(`Running http://localhost:${PORT}`);
    console.log("ctrl+c to exit");
    
    
})