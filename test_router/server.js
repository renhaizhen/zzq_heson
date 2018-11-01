const express = require('express');
let server = express();
server.listen(8080);
//'template/ejs/' 请求路径  前端的路径要拼接到这个后面   静态资源 加载
server.use(express.static('template/ejs/'));
// 当前首页注册完成
server.use('/index',require('./router/index.js'));
server.use('/article',require('./router/article.js'));
server.use('/user',require('./router/user.js'));