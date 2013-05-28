var app = require('express').createServer()
  , io = require('socket.io').listen(app)
  , osc = require('node-osc')
  , client = new osc.Client('0.0.0.0', 3333);

app.listen(1337);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

app.get('/*.(js|css|jpg)', function(req, res){
  res.sendfile("./public"+req.url);
});

io.sockets.on('connection', function (socket) {
    socket.on('xy', function (data) {
        console.log(data);
        client.send("/x", data[0]);
        client.send("/y", data[1]);
    });
});
