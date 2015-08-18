'use strict'

const http = require('http')
// variable de entorno
const port = process.env.PORT || 8080

//Callbacks
const server = http.createServer(function (req, res){
	res.end('Hola io.js')
})

server.listen(port, function (){
	console.log('Server listenning on port ' + port)
})