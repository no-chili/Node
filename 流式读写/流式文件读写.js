const fs = require('fs')

let pathName = {
    src: './copy/copy.js',
    dis: './copy/text.js'
}

let readable = fs.createReadStream(pathName.src)
let writeable = fs.createWriteStream(pathName.dis)

readable.pipe(writeable)

writeable.on('finish', () => {
    console.log('copy结束');
})
