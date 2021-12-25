import http from "http" //用来启服务
//开启服务
var server=http.createServer(function(req,res){
    res.writeHead(404,{
      'content-type' : 'text/html;charset="utf-8"'
    });
    res.write('<h1>TS-node</h1><p>------------</p>');
    res.end();
}).listen(8888); //端口号
console.log('服务器开启成功');
