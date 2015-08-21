const io = require('socket.io-client')
const record = document.querySelector('#record')

io.connect()

record.addEventListener('click', function (e) {
  e.preventDefault()

  console.log('Button clicked')
})