let express = require('express')
const { fsync } = require('fs')
let path = require('path')
let url = require('url')

let app = express()

app.use(express.static('./pp'))

app.get('/', (req, res) => {
    // 获取请求文件路径
    pn = path.join(__dirname, '1.txt')

    res.sendFile(pn)
    console.log(req.url);
    console.log(req.params);
})

app.use((req, res, next) => {
    if (req)
        res.send('404')
})

app.listen(3000, () => {
    console.log('服务器启动成功...');
})
