//服务端
var io = require('socket.io')();

io.on('connection', function (socket) {
    console.log('a user 用户上线...');
    socket.on('disconnect', function () {
        console.log('user 断开连接..');
        io.emit('offline','')
    });
    io.emit('online','');//有人上线 向客户端发生 online 事件
});

exports.listen = function (server) {
    io.listen(server)
};