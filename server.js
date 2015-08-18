'use strict'

const http = require('http')
// variable de entorno
const port = process.env.PORT || 8080

//Callbacks
const server = http.createServer(onRequest)
server.listen(port, onListening)

function onRequest ( req , res){
	res.end('Hola io.js \n ')	
}
function onListening ( req , res){
	console.log('Server listening on port ' + port)
}

