'use strict'

const http = require('http')
const fs = require('fs')
// variable de entorno
const port = process.env.PORT || 8080

//Event Emiter
const server = http.createServer()

server.on('request', onRequest)
server.on('listening', onListening)

server.listen(port)

function onRequest ( req , res){
	// Responder el archivo ante la peticion http se hace publica
	// la carpeta public
	let file = fs.readFileSync('public/index.html')
	res.end(file)	
}
function onListening ( req , res){
	console.log('Server listening on port ' + port)
}

