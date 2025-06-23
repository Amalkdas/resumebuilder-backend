//import json server

const jsonserver = require('json-server');

const cors =require('cors')


//create a server using json server

const server=jsonserver.create();

//setup middleware

const middleware=jsonserver.defaults();

//setuo routes

const route =  jsonserver.router('db.json');

//implementing use

server.use(cors())
server.use(middleware())
server.use(route())
//create a port

const port = process.env.PORT || 3000

//start server

server.listen(PORT ,()=>{
    console.log("server running", PORT);
    

})

