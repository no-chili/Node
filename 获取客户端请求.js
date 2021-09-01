const http = require('http')
const url = require('url')

const fs = require('fs')

hostname = "127.0.0.1"
port = 3001

function parsetime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixtime(time) {
    return { unixtime: time.getTime() }
}

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "Text/Plain")
    let time = new Date()
    let result
    if (req.url === '/') {
        result = time
        console.log('服务器被请求了');
        const out = fs.createWriteStream('./请求文件/log.txt')
        out.write(`请求方法${req.method}\n`)
        out.write(`请求url${req.url}\n`)
        out.write(`请求version${req.httpVersion}\n`)
        out.write(`请求请求头${JSON.stringify(req.headers)}\n`)
    } else if (req.url == '/parsetime') {
        result = parsetime(time)
    } else if (req.url == '/unixtime') {
        result = unixtime(time)
    }

    if (result) {
        res.writeHead(200)
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404)
    }
})

server.listen(port, hostname, () => {
    console.log(`服务器运行在http://${hostname}:${port}`);
})
