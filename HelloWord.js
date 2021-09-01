//1. 首先 使用 HTTP 服务器和客户端必须 require('http')。
//2. 然后使用http.createServer([requestListener])来创建一个web服务器，其中传入一个可选的回调函数，这回调函数有两个参数分别代表客户端请求与服务器端的响应对象
//3. 使用 server.listen([port][, hostname][, backlog][, callback])开始在指定的 port 和 hostname 上接受连接



//引入http模块
const http = require('http');

locallhost = '127.0.0.1'
prot = 3000

//创建一个服务器
const server = http.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end("Hello Word")
})

// 给服务器绑定端口号
server.listen(prot, locallhost, function(err) {
    if (!err) console.log("服务器绑定成功")
    else console.log('服务器绑定失败', err);
})

server.timeout = 1000 //设置超时为1秒
console.log(server.timeout)
