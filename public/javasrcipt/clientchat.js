'use strict';
 // 客户端

var socket =io();

socket.on('online',function (msg) {
    showMsg(1);

});
socket.on('offline',function (msg) {
    showMsg(0);

});