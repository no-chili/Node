const fs = require('fs')

function copy(src, dest, size, callback) {
    // 打开源文件
    fs.open(src, 'r', (err, readFd) => {
        //打开目标文件
        fs.open(dest, 'w', (err, writeFd) => {
            let buf = new Buffer.alloc(size)
            let readed = 0;
            let writed = 0;
            (function next() {
                // 读取
                fs.read(readFd, buf, 0, size, readed, (err, bytesRead) => {
                    readed += bytesRead;
                    // 文件没有可以读的了,关闭源文件
                    if (!bytesRead) { fs.close(readFd, err => console.log("关闭源文件")); }
                    // 写入
                    fs.write(writeFd, buf, 0, bytesRead, writed, (err, bytesWritten) => {
                        // 文件没可以写的了,同步缓存并关闭文件
                        if (!bytesWritten) {
                            fs.fsync(writeFd, err => {
                                console.log('拷贝完成');
                                fs.close(writeFd, err => {
                                    return !err && callback()
                                })
                            })
                            return
                        }
                        //为下一次做准备
                        writed += bytesWritten;
                        // 继续下一次读写
                        next()
                    });
                })
            })()
        })
    })
}

copy('1.txt', '2.txt', 2, () => {})
