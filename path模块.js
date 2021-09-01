let path = require('path')

fsPath = path.join('foo', 'bar') //连接路径
console.log(fsPath);

resPath = path.resolve('/foo/bar', './join/')
console.log(resPath);

ex = path.extname('foo/g.jpg')
console.log(ex);
