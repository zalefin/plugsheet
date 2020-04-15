var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const fs = require('fs');


app.get('/update', function(req, res){
  console.log('update');
  // tabledata = "column1,column2,column3\na,b,c\ne,f,g"
  res.sendStatus(200);
  // io.emit('update', tabledata);
  var raw = fs.readFileSync('housing.json')
  io.emit('update', JSON.stringify(JSON.parse(raw)));
})

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});