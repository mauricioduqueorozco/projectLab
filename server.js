'use strict'

const http = require('http')
const router = require('./router')
const realtime = require('./realTime')

const server = http.createServer()

const port = process.env.PORT || 8080
const io = require('socket.io')
//realtime(server)
server.on('request', router)
server.on('listening', onListening)

server.listen(port)

function onListening () {
  console.log(`Server running in port ${port}`)
}
