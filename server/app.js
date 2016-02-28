var Express = require('express')
var app = Express()

var http = require('http')
var server = http.Server(app)

var SocketIo = require("socket.io")
var io = SocketIo(server)

//why the above. sockets and express want to use their own server. you put in the http server that they both can use.

app.use(Express.static("./client"))

io.on("connection", function(socket) {
  console.log('hello');
})

io.on("connection", function (socket) {
  console.log("You are connected!")
  socket.on("echo", function (data) {
    console.log("echoing");
    io.emit("echoed", data + " " + data + "...")
  })
})



server.listen(8080, function(){
  console.log('listening port 8080');
})
