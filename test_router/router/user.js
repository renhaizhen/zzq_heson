const express = require('express');
const ejs = require('ejs');
let router = express.Router();

router.get('/',async (req,res,next)=>{
    // res.send('进来了！！！！');
    //async awite 等上面执行完了直接返回html
    let html = await ejs.renderFile('./template/ejs/3.html',{
        "data": {
            "loginname": "jquery",
            "avatar_url": "https://avatars2.githubusercontent.com/u/3049683?v=4&s=120",
            "githubUsername": "purejs",
            "create_at": "2013-06-07T13:53:47.144Z",
            "score": 105,
            "recent_topics": [
                {
                    "id": "5a2f38978230827a18293643",
                    "author": {
                        "loginname": "jquery",
                        "avatar_url": "https://avatars2.githubusercontent.com/u/3049683?v=4&s=120"
                    },
                    "title": "外包神器！横扫一切增删改查事务！打开浏览器写SQL就能一站完成系统开发！",
                    "last_reply_at": "2017-12-12T03:17:39.828Z"
                },
                {
                    "id": "5a28e9a7d92f2f5b185acca5",
                    "author": {
                        "loginname": "jquery",
                        "avatar_url": "https://avatars2.githubusercontent.com/u/3049683?v=4&s=120"
                    },
                    "title": "可以使用 Node.js 做无栈开发了！打开浏览器写 SQL 做配置就行！",
                    "last_reply_at": "2017-12-07T09:01:02.343Z"
                },
                {
                    "id": "5a1f7150110a338547d6e32b",
                    "author": {
                        "loginname": "jquery",
                        "avatar_url": "https://avatars2.githubusercontent.com/u/3049683?v=4&s=120"
                    },
                    "title": "使用 NodeJS 做无栈开发 - Enhancer 云开发平台正式发布了！",
                    "last_reply_at": "2017-12-01T09:26:43.162Z"
                }
            ],
            "recent_replies": [
                {
                    "id": "5baee8de9545eaf107b9c6f3",
                    "author": {
                        "loginname": "lellansin",
                        "avatar_url": "https://avatars2.githubusercontent.com/u/2081487?v=4&s=120"
                    },
                    "title": "Node 地下铁第七期「深圳站」线下沙龙邀约 - Node.js 新生态",
                    "last_reply_at": "2018-10-30T13:13:24.545Z"
                },
                {
                    "id": "5b5f231f58db3ccf66a45083",
                    "author": {
                        "loginname": "wuminqi",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/628250?v=4&s=120"
                    },
                    "title": "【视频分享】Node 地下铁第六期「成都站」- 企业级的 Node.js 实践",
                    "last_reply_at": "2018-09-07T00:55:53.654Z"
                },
                {
                    "id": "5ae886c51b02288048bd0b75",
                    "author": {
                        "loginname": "longletian",
                        "avatar_url": "https://avatars0.githubusercontent.com/u/28197668?v=4&s=120"
                    },
                    "title": "求node和微信小程序的教程或者 开源项目",
                    "last_reply_at": "2018-10-25T03:00:52.514Z"
                },
                {
                    "id": "5b5331fdfb9e84ec69cc1cc5",
                    "author": {
                        "loginname": "RooQs",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/25195750?v=4&s=120"
                    },
                    "title": "Node，做web开发现在还有什么优势吗，",
                    "last_reply_at": "2018-07-24T01:37:16.285Z"
                }
            ]
        }
    })
    res.send(html);
    // console.log(html);
})

module.exports = router;