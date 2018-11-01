const express = require('express');
const ejs = require('ejs');
let router = express.Router();

router.get('/',async (req,res,next)=>{
    // res.send('进来了！！！！');
    //async awite 等上面执行完了直接返回html
    let html = await ejs.renderFile('./template/ejs/2.html',{
        "data": {
            "id": "5baee8de9545eaf107b9c6f3",
            "author_id": "51f0f267f4963ade0e08f503",
            "tab": "share",
            "content": "<div class=\"markdown-text\"><h1>Node.js 新生态</h1>\n<p>关于 SSR、IoT、应用治理，以及来自腾讯的新物种 —— Tars.js，</p>\n<p>腾讯、ThoughtWorks、阿里巴巴的 4 位分享者，期待和你交流碰撞层出不穷的 Node.js 新应用场景。</p>\n<h2>Agenda</h2>\n<p><img src=\"//static.cnodejs.org/FmVpEKuYsrXt8ek9z8d6DjFexMAc\" alt=\"20180929110352.png\"></p>\n<p>时间：2018.10.13\n地点：深圳后海阿里中心\n报名链接: <a href=\"https://survey.alibaba.com/survey/AgD9rVfQT\">https://survey.alibaba.com/survey/AgD9rVfQT</a>\n活动主页: <a href=\"http://nodejs.club/\">http://nodejs.club/</a></p>\n<p>注意: 沙龙场地有限，在报名链接中仔细填写「关注Node.js 新生态中的哪些具体问题」对最终挑选参加资格会有帮助。</p>\n</div>",
            "title": "Node 地下铁第七期「深圳站」线下沙龙邀约 - Node.js 新生态",
            "last_reply_at": "2018-10-30T13:13:24.545Z",
            "good": false,
            "top": true,
            "reply_count": 24,
            "visit_count": 3938,
            "create_at": "2018-09-29T02:52:14.701Z",
            "author": {
                "loginname": "lellansin",
                "avatar_url": "https://avatars2.githubusercontent.com/u/2081487?v=4&s=120"
            },
            "replies": [
                {
                    "id": "5baef1ddede204052db80295",
                    "author": {
                        "loginname": "mariodu",
                        "avatar_url": "//gravatar.com/avatar/1cb272a2b4347c9a15b502ce7e4802ba?size=48"
                    },
                    "content": "<div class=\"markdown-text\"><p>支持，已报名</p>\n</div>",
                    "ups": [
                        "5b97760d37b3005a0b0e6dd9",
                        "5b9b2c7cce9d14c2254dfaca"
                    ],
                    "create_at": "2018-09-29T03:30:37.113Z",
                    "reply_id": null,
                    "is_uped": false
                },
                {
                    "id": "5baf5f8c9545eaf107b9c71a",
                    "author": {
                        "loginname": "jquery",
                        "avatar_url": "https://avatars2.githubusercontent.com/u/3049683?v=4&s=120"
                    },
                    "content": "<div class=\"markdown-text\"><h4>支持! 用 <a href=\"https://enhancer.io\">Enhancer 云开发平台，体验 Node.js 无栈开发</a></h4>\n</div>",
                    "ups": [
                        "5b97760d37b3005a0b0e6dd9",
                        "5b9b2c7cce9d14c2254dfaca",
                        "5bbc5f5537a6965f59051fe9"
                    ],
                    "create_at": "2018-09-29T11:18:36.597Z",
                    "reply_id": null,
                    "is_uped": false
                },
                {
                    "id": "5bb1b5c837a6965f59051e25",
                    "author": {
                        "loginname": "yllziv",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/11460601?v=4&s=120"
                    },
                    "content": "<div class=\"markdown-text\"><p>支持！</p>\n</div>",
                    "ups": [
                        "5b97760d37b3005a0b0e6dd9",
                        "5b9b2c7cce9d14c2254dfaca"
                    ],
                    "create_at": "2018-10-01T05:51:04.073Z",
                    "reply_id": null,
                    "is_uped": false
                },
                {
                    "id": "5bb33e90ede204052db8034c",
                    "author": {
                        "loginname": "sujimingfafafa",
                        "avatar_url": "https://avatars2.githubusercontent.com/u/43315360?v=4&s=120"
                    },
                    "content": "<div class=\"markdown-text\"><p>支持</p>\n</div>",
                    "ups": [
                        "5b97760d37b3005a0b0e6dd9"
                    ],
                    "create_at": "2018-10-02T09:46:56.190Z",
                    "reply_id": null,
                    "is_uped": false
                },
                {
                    "id": "5bb42c9037a6965f59051e88",
                    "author": {
                        "loginname": "nanhupatar",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/27266016?v=4&s=120"
                    },
                    "content": "<div class=\"markdown-text\"><p>点赞</p>\n</div>",
                    "ups": [
                        "5bbd616fede204052db80448"
                    ],
                    "create_at": "2018-10-03T02:42:24.248Z",
                    "reply_id": null,
                    "is_uped": false
                },
                {
                    "id": "5bb9c9259545eaf107b9c8b5",
                    "author": {
                        "loginname": "iflet",
                        "avatar_url": "https://avatars2.githubusercontent.com/u/42956863?v=4&s=120"
                    },
                    "content": "<div class=\"markdown-text\"><p>挺想去的，但是要上班</p>\n</div>",
                    "ups": [
                        "5bbd616fede204052db80448",
                        "5baca9db37a6965f59051cf1"
                    ],
                    "create_at": "2018-10-07T08:51:49.059Z",
                    "reply_id": null,
                    "is_uped": false
                },
                {
                    "id": "5bbc1b609545eaf107b9c929",
                    "author": {
                        "loginname": "18820227745",
                        "avatar_url": "https://avatars0.githubusercontent.com/u/25097125?v=4&s=120"
                    },
                    "content": "<div class=\"markdown-text\"><p>已报名</p>\n</div>",
                    "ups": [],
                    "create_at": "2018-10-09T03:07:12.156Z",
                    "reply_id": null,
                    "is_uped": false
                },
                {
                    "id": "5bbda7a1ede204052db80462",
                    "author": {
                        "loginname": "18820227745",
                        "avatar_url": "https://avatars0.githubusercontent.com/u/25097125?v=4&s=120"
                    },
                    "content": "<div class=\"markdown-text\"><p><a href=\"/user/lellansin\">@lellansin</a> 报名成功了会有通知吗</p>\n</div>",
                    "ups": [
                        "5b97a38937b3005a0b0e6e10"
                    ],
                    "create_at": "2018-10-10T07:17:53.544Z",
                    "reply_id": null,
                    "is_uped": false
                },
                {
                    "id": "5bbe0f4737a6965f59052082",
                    "author": {
                        "loginname": "fairyly",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/17672815?v=4&s=120"
                    },
                    "content": "<div class=\"markdown-text\"><p>加群</p>\n</div>",
                    "ups": [
                        "5b97a38937b3005a0b0e6e10"
                    ],
                    "create_at": "2018-10-10T14:40:07.135Z",
                    "reply_id": null,
                    "is_uped": false
                },
                {
                    "id": "5bbfed7aede204052db804a0",
                    "author": {
                        "loginname": "xionglover",
                        "avatar_url": "https://avatars0.githubusercontent.com/u/43158029?v=4&s=120"
                    },
                    "content": "<div class=\"markdown-text\"><p>好</p>\n</div>",
                    "ups": [],
                    "create_at": "2018-10-12T00:40:26.734Z",
                    "reply_id": null,
                    "is_uped": false
                },
                {
                    "id": "5bc0640315e4fd1923f48e6a",
                    "author": {
                        "loginname": "zexiplus",
                        "avatar_url": "https://avatars3.githubusercontent.com/u/15920861?v=4&s=120"
                    },
                    "content": "<div class=\"markdown-text\"><p>报名了额          现在还没收到通知  应该是凉了吧…</p>\n</div>",
                    "ups": [
                        "5bbc5f5537a6965f59051fe9"
                    ],
                    "create_at": "2018-10-12T09:06:11.705Z",
                    "reply_id": null,
                    "is_uped": false
                },
                {
                    "id": "5bc065ee15e4fd1923f48e6f",
                    "author": {
                        "loginname": "zexiplus",
                        "avatar_url": "https://avatars3.githubusercontent.com/u/15920861?v=4&s=120"
                    },
                    "content": "<div class=\"markdown-text\"><p><a href=\"/user/zexiplus\">@zexiplus</a> 额  收到了  在垃圾邮件里面…outlook的过滤也是服了…</p>\n</div>",
                    "ups": [],
                    "create_at": "2018-10-12T09:14:22.652Z",
                    "reply_id": "5bc0640315e4fd1923f48e6a",
                    "is_uped": false
                },
                {
                    "id": "5bc2fd6737a6965f590521a6",
                    "author": {
                        "loginname": "wjdwj",
                        "avatar_url": "https://avatars2.githubusercontent.com/u/43171844?v=4&s=120"
                    },
                    "content": "<div class=\"markdown-text\"><p><a href=\"/user/18820227745\">@18820227745</a></p>\n</div>",
                    "ups": [
                        "5b97760d37b3005a0b0e6dd9",
                        "5bc60bd215e4fd1923f48fb7"
                    ],
                    "create_at": "2018-10-14T08:25:11.746Z",
                    "reply_id": "5bbda7a1ede204052db80462",
                    "is_uped": false
                },
                {
                    "id": "5bc322ff15e4fd1923f48ec9",
                    "author": {
                        "loginname": "chyfl",
                        "avatar_url": "https://avatars2.githubusercontent.com/u/43158209?v=4&s=120"
                    },
                    "content": "<div class=\"markdown-text\"><p>；；；</p>\n</div>",
                    "ups": [
                        "5b97760d37b3005a0b0e6dd9"
                    ],
                    "create_at": "2018-10-14T11:05:35.225Z",
                    "reply_id": null,
                    "is_uped": false
                },
                {
                    "id": "5bc6ad5237a6965f590522c9",
                    "author": {
                        "loginname": "CHANGhaoying",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/43145163?v=4&s=120"
                    },
                    "content": "<div class=\"markdown-text\"><p><a href=\"/user/jquery\">@jquery</a> 加油</p>\n</div>",
                    "ups": [
                        "5b97760d37b3005a0b0e6dd9",
                        "5bc60bd215e4fd1923f48fb7"
                    ],
                    "create_at": "2018-10-17T03:32:34.163Z",
                    "reply_id": "5baf5f8c9545eaf107b9c71a",
                    "is_uped": false
                },
                {
                    "id": "5bc6f335ede204052db805dc",
                    "author": {
                        "loginname": "shaooan",
                        "avatar_url": "https://avatars2.githubusercontent.com/u/44205962?v=4&s=120"
                    },
                    "content": "<div class=\"markdown-text\"><p><a href=\"/user/zexiplus\">@zexiplus</a> 收到没\nFrom <a href=\"https://github.com/soliury/noder-react-native\">Noder</a></p>\n</div>",
                    "ups": [],
                    "create_at": "2018-10-17T08:30:45.617Z",
                    "reply_id": "5bc0640315e4fd1923f48e6a",
                    "is_uped": false
                },
                {
                    "id": "5bc939249545eaf107b9cc88",
                    "author": {
                        "loginname": "zlyuanteng",
                        "avatar_url": "https://avatars0.githubusercontent.com/u/42952042?v=4&s=120"
                    },
                    "content": "<div class=\"markdown-text\"><p>支持支持</p>\n</div>",
                    "ups": [],
                    "create_at": "2018-10-19T01:53:40.368Z",
                    "reply_id": null,
                    "is_uped": false
                },
                {
                    "id": "5bd2a878ad50495f5e2fbb76",
                    "author": {
                        "loginname": "zhen-ke",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/11960036?v=4&s=120"
                    },
                    "content": "<div class=\"markdown-text\"><p>支持下</p>\n</div>",
                    "ups": [],
                    "create_at": "2018-10-26T05:39:04.722Z",
                    "reply_id": null,
                    "is_uped": false
                },
                {
                    "id": "5bd858f48ca34e0b047042b2",
                    "author": {
                        "loginname": "HuoXiaoChen",
                        "avatar_url": "https://avatars3.githubusercontent.com/u/43690442?v=4&s=120"
                    },
                    "content": "<div class=\"markdown-text\"><p>支持</p>\n</div>",
                    "ups": [],
                    "create_at": "2018-10-30T13:13:24.542Z",
                    "reply_id": null,
                    "is_uped": false
                }
            ],
            "is_collect": false
        }
    })
    res.send(html);
    // console.log(html);
})

module.exports = router;