"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http")); //用来启服务
//开启服务
var server = http_1.default.createServer(function (req, res) {
    res.writeHead(404, {
        'content-type': 'text/html;charset="utf-8"'
    });
    res.write('<h1>TS-node</h1><p>------------</p>');
    res.end();
}).listen(8888); //端口号
console.log('服务器开启成功');
