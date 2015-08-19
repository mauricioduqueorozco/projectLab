'use strict'

const http = require('http')
const fs = require('fs')
const path = require('path')
// variable de entorno
const port = process.env.PORT || 8080

//Event Emiter
const server = http.createServer()

server.on('request', onRequest)
server.on('listening', onListening)

server.listen(port)

function onRequest ( req , res){
	// Responder el archivo ante la peticion http se hace publica
	// la carpeta public, este modo es asincrono
	let fileName = path.join(__dirname, 'public', 'index.html')
	let file = fs.readFile(fileName, function(err, file){
		if(err) return res.end(err.message)
		res.setHeader('Content-Type','text/html')
		res.end(file)
	})	
}
function onListening ( req , res){
	console.log('Server listening on port ' + port)
}

