const fs = require('fs')
fs.access('请求文件', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('ok');
    }
})

fs.stat('请求文件/log.txt', (err, wj) => {
    console.log(err);
    console.log(wj.size);
})

fs.stat("1.txt", (err, statObj) => {
    console.log(err);
    console.log(statObj); // 6
});
