// 引入express
const express = require('express')

// 创建app服务对象
const app = express()

// 配置路由
app.get('/', function(req, res) {
    console.log(req.params)
    console.log(req.url)
    console.log(req.query);
    res.send('主页')
})

app.get('/nihao', function(req, res) {
    console.log(req.url)
    res.send('你好')
})

app.post('/', function(req, res) {
    res.send('发送的是post请求')
})

// 指定端口号
app.listen(3002, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('服务器启动了')
    }

})
