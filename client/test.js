var socket = io()

socket.emit('echo', 'echo echo echo...')

socket.on("echoed", function (data){
  console.log(data);
})
