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
	let url = req.url

	if(url.startsWith('/index') || url === '/'){
		return serveIndex(res)
	}
	if(url === '/app.js'){
		return serveApp(res)
	}
	res.statusCode = 404
	res.end(`404 not found: ${url}`)
}

function serveIndex(res){
	res.setHeader('Content-Type', 'text/html')
	let index = path.join(__dirname, 'public', 'index.html')
	let rs = fs.createReadStream(index)
	rs.pipe(res)	

	rs.on('error', function(err){
		res.end(err.message)
	})
}

function serveApp(res){
	res.setHeader('Content-Type', 'text/javascript')
	let app = path.join(__dirname, 'public', 'app.js')
	let rs = fs.createReadStream(app)
	rs.pipe(res)	

	rs.on('error', function(err){
		res.end(err.message)
	})
}

function onListening ( req , res){
	//Uso de back tips para hacer un Template de Strings
	console.log(`Server listening on port ${port}`)
}

