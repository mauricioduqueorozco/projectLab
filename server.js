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
	//Uso de Pipes y de Streams
	res.setHeader('Content-Type', 'text/html')
	let index = path.join(__dirname, 'public', 'index.html')
	let rs = fs.createReadStream(index)
	rs.pipe(res)	

	rs.on('error', function(err){
		res.end(err.message)
	})
}
function onListening ( req , res){
	//Uso de back tips para hacer un Template de Strings
	console.log(`Server listening on port ${port}`)
}

