// ( function(){
//     const name = "Anuj";
//     console.log(name);
// } )();

const http = require("http");
const server = http.createServer((req, res) =>{
    // console.log(req.url);
    
    res.end("Hello from the others sides");
});
 
server.listen(8000,"127.0.0.1",() =>{
    console.log("Listening to the port no 8000");
})