const fs = require('fs')
    // const buf = new Buffer.alloc(10)

// fs.open('1.txt', 'r', (err, fd) => {
//     if (err) throw err
//     console.log('文件打开了');
//     fs.read(fd, buf, 0, buf.length, 0, (err, bytesRead, buffer) => {
//         console.log(bytesRead);
//         console.log('1');
//         console.log(buffer);
//         console.log(buffer.toString());
//         fs.read(fd, buf, 0, buf.length, 11, (err, bytesRead, buffer) => {
//             console.log(bytesRead);
//             console.log('2');
//             console.log(buffer);
//             console.log(buffer.toString());
//         })
//     })
//     fs.close(fd, function() {
//         console.log('读取完成');
//     })
// })

const buf = Buffer.from('你好啊!')
fs.open('1.txt', 'w', (err, fd) => {
    fs.write(fd, buf, 0, buf.length, buf.length, (err, bytesWritten, buffer) => {
        fs.fsync(fd, err => {
            fs.close(fd, () => {
                console.log('写入完成');
            })
        })
    })
})

fs.readFile('1.txt', 'utf-8', (err, data) => {
    console.log(data);
})
