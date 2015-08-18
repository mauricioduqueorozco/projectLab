'use strict'

const http = require('http')
// variable de entorno
const port = process.env.PORT || 8080

//Event Emiter
const server = http.createServer()

server.on('request', onRequest)
server.on('listening', onListening)

server.listen(port)

function onRequest ( req , res){
	res.end('Hola io.js \n ')	
}
function onListening ( req , res){
	console.log('Server listening on port ' + port)
}

