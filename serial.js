'use strict'

var serialport = require("serialport");

  serialport.list(function (err , ports){
    ports.forEach(function (port){
      console.log(port)
      /*if(port.serialNumber){
        console.log(port)
      }*/
    })
  })

  








