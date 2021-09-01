// 文件系统的引入
const fs = require('fs')
    //文件的写
fs.writeFile('1.txt', 'hello node\n', {
    flag: 'a+'
}, (err) => {
    if (err) throw err
    console.log('写入成功!');
})

//文件的打开
fs.open('1.txt', 'r+', (err, fd) => {
    if (err) {
        console.log(err);
        throw err
    }
    console.log('文件打开成功');
    console.log(fd);
    //文件的关闭
    fs.close(fd, function() {
        console.log('文件关闭了');
    })
})

//文件的读
fs.readFile('1.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        throw err
    }
    console.log(data);
})
