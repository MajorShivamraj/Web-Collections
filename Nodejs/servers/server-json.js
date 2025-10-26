const http = require("http")

// create server
const server = http.createServer((req,res)=>{
    // define the response content type...
    res.setHeader("content-type","application/json");

    // server routing logic
    if(req.url==="/" && req.method==="GET"){
        res.statusCode=200
        res.end(JSON.stringify({message:"Welcome to API"}));
    }
    else if(req.url==="/users" && req.method==="GET"){
        const users = [{id:1,name:"SitaRam"},{id:2,name:"RadheShyam"}];
        res.statusCode=200
        res.end(JSON.stringify(users))
    }
    else if(req.url==="/product" && req.method==="GET"){
        const product = [{id:101,item:"Laptop",price:60000},{id:102,item:"Phone",price:20000}]
        res.statusCode=200
        res.end(JSON.stringify(product))
    }
})

const PORT=5000

server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
    console.log("ctrl+c to exit server...");
    
    
})
