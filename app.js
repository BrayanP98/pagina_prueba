// Cargar el modulo HTTP
const config = require('./config');
var http = require('http');

const fs= require('fs')

// Configurar una respuesta HTTP para todas las peticiones
const host='localhost';

const port=3000;
const server1 = http.createServer((req,res)=>{

  fs.readFile('./public/index.html', (err, data)=>{

    if(err){

      res.writeHead(404)
      res.write("no se encosntro")
    }else{

      res.write(data)
    }
    res.end();
  })
  


})
function onRequest(request, response) {
  console.log("Peticion Recibida.");
  response.writeHead(200, {"Content-Type": "text/html"});
  
 
}



// Escuchar al puerto 8080
server1.listen(config.PORT,config. HOST, ()=>{
  console.log("Servidor funcionando en ",config.PORT,config. HOST);

});

// Poner un mensaje en la consola
//console.log("Servidor funcionando en http://localhost:8080/");