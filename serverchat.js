
var io = require('socket.io')();

io.on('connection', function (socket) {
    console.log('a user 用户上线...');
    socket.on('disconnect', function () {
        console.log('user 断开连接..');
    });
});

exports.listen = function (server) {
    io.listen(server)
};