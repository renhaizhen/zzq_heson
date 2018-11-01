const express = require('express');
const ejs = require('ejs');
let router = express.Router();

router.get('/',async (req,res,next)=>{
    // res.send('进来了！！！！');
    //async awite 等上面执行完了直接返回html
    let html = await ejs.renderFile('./template/ejs/1.html',{
        "data": [
            {
                "id": "5bd4772a14e994202cd5bdb7",
                "author_id": "504c28a2e2b845157708cb61",
                "tab": "share",
                "content": "<div class=\"markdown-text\"><p>2018年10月27日晚上，突然收到服务器不能访问的告警通知，拜托了狼叔 <a href=\"/user/i5ting\">@i5ting</a> 帮忙看看，结果登不上也ping不通。\n后来收到短信，发现是被ucloud封了，短信内容如下：</p>\n<blockquote>\n<p>【UCloud】尊敬的UCloud用户，您的IP：123.59.77.142  存在URL ：<a href=\"https://cnodejs.org/topic/57239bce5a26c4a841ecbf01\">https://cnodejs.org/topic/57239bce5a26c4a841ecbf01</a> （详细信息请查看邮箱）包含违禁内容（包括但不限于翻墙等），违反了国家有关法律法规。目前依主管单位要求，对您的IP予以封停，请您尽快处理违规内容。待处理完成后请联系技术支持重新开启业务。[4000188113]</p>\n</blockquote>\n<p>然后联系了ucloud的客服，一下就打通了，对方态度挺好处理问题也快。ucloud说是运营商那边封的，不是他们的检测机制。所以需要联系运营商解决。\n考虑到各位亲爱的网友们的行为我无法控制，那么一直跟越来越严格的审查系统对抗只会让自己疲惫，所以我就站点迁到国外。来到了aws jp。</p>\n<p>我大致测了测，电信和移动的访问速度非常快，100ms以内，联通会慢一点，400ms以内吧。</p>\n<p>建议翻墙访问。</p>\n</div>",
                "title": "服务器迁移至 aws 日本机房",
                "last_reply_at": "2018-10-31T04:35:22.799Z",
                "good": false,
                "top": true,
                "reply_count": 45,
                "visit_count": 1819,
                "create_at": "2018-10-27T14:33:14.694Z",
                "author": {
                    "loginname": "alsotang",
                    "avatar_url": "https://avatars1.githubusercontent.com/u/1147375?v=4&s=120"
                }
            },
            {
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
                }
            },
            {
                "id": "5ba5fd6237a6965f59051bd1",
                "author_id": "4f447c2f0a8abae26e01b27d",
                "tab": "share",
                "content": "<div class=\"markdown-text\"><blockquote>\n<p>『大吉大利，明早吃蛋。』</p>\n<p>底部有文化衫活动邀您参加。</p>\n</blockquote>\n<p>知乎原文地址：<a href=\"https://zhuanlan.zhihu.com/p/45143762\">https://zhuanlan.zhihu.com/p/45143762</a></p>\n<p><img src=\"//static.cnodejs.org/FkV4SW_6zuURqOdHc0lalW7pC7Fv\" alt=\"image.png\"></p>\n<p>2016 年 9 月，我们在 JSConf China 2016 上宣布了 Egg 开源，至今整整 2 年了。\n在 <a href=\"https://zhuanlan.zhihu.com/p/31640541\">Egg 2.0 发布通告</a> 提到，核心代码已经很稳定，<strong>后续重心主要在开发者体验方面的优化。</strong></p>\n<blockquote>\n<p>Egg 是阿里 Node.js 的核心基础框架，面向『企业级的 Web 基础框架』这个领域，提供了「微内核 + 插件机制 + 框架定制能力」，完美达成生态共建和差异化定制的平衡点。</p>\n<p>既适合个人小项目快速开发，也适合团队架构师基于自身的技术架构在 Egg 基础上扩展出适合特定团队业务场景的框架。</p>\n<p>它沉淀自阿里在各行各业不同领域的大规模工程实践经验，稳定支撑了多年天猫双11大促，顶级流量压力。</p>\n</blockquote>\n<p>接下来跟大家分享下，过去 9 个月里面，我们的一些产出和数据，本文较长，请慢慢品用：</p>\n<ul>\n<li><strong>开发者数据分享</strong></li>\n<li><strong>文化衫活动邀请</strong></li>\n<li><strong>开发者体验优化</strong>\n<ul>\n<li>TypeScript 的支持</li>\n<li>新增「生命周期」</li>\n<li>Alinode 接入指南</li>\n<li>和 Java 的互联互通方案</li>\n<li>实践案例 - 用 Egg 重构的 cnode 社区</li>\n<li>来自语雀团队的 sequelize ORM 实践分享</li>\n<li>与 Webpack 等前端工程的实践分享</li>\n<li>错误处理和 opentracing 的 RFC</li>\n<li>egg-init 骨架重构方案</li>\n</ul>\n</li>\n<li><strong>未来规划</strong></li>\n</ul>\n<hr>\n<h2>开发者数据</h2>\n<p><img src=\"https://cdn.nlark.com/yuque/0/2018/png/84182/1537602757084-21ffa6c7-d95d-4da0-b48b-6312551d1b03.png\" alt=\"image.png | left | 600x303\"></p>\n<ul>\n<li>官网 PV 在 1.2w 左右。</li>\n<li>npm egg 模块数 1006 个，GitHub 依赖库 3738 个。</li>\n<li>一千多个 Pull Request，2200 个 Issue，130 多位 Contributors 。</li>\n<li>共发布了 81 个版本，<a href=\"https://github.com/eggjs/egg/releases\">Release Note</a> 。</li>\n<li>社区实践项目：<a href=\"https://github.com/cnodejs/egg-cnode\">cnodejs/egg-cnode</a> ，<a href=\"https://github.com/eggjs/awesome-egg\">eggjs/awesome-egg</a> 。</li>\n<li><a href=\"https://zhuanlan.zhihu.com/eggjs\">知乎专栏 Node.js</a> 一共发布了 48 篇文章，7600 订阅，阅读数据未知（知乎创作者中心看不上咱，不给内测资格 😭）。</li>\n</ul>\n<p><strong>正在使用 Egg 的公司，不完全统计：</strong></p>\n<ul>\n<li>深度使用的： 阿里巴巴，全民直播，网易考拉</li>\n<li>使用并有分享过使用经验的：去哪儿，摩拜，点评</li>\n<li>有个别团队咨询过试水但最终有没有落地的不知道：美团，新浪，百度，腾讯，YY 等</li>\n</ul>\n<p><strong>顺便分享一个 cnpm 的</strong><a href=\"https://fengmk2.com/npm-china-mirror-downloads?year=2018\">统计数据</a><strong>：</strong></p>\n<p><img src=\"https://cdn.nlark.com/yuque/0/2018/png/84182/1537602856784-1517e844-15e1-495f-b58b-c5103a09b5a3.png\" alt=\"image.png | left | 720x423\"></p>\n<p><img src=\"https://cdn.nlark.com/yuque/0/2018/png/84182/1537602864083-a887fcab-8754-4ba6-90cb-eada7a3a477f.png\" alt=\"image.png | left | 720x413\"></p>\n<hr>\n<h2>文化衫活动</h2>\n<p>欢迎大家访问以下链接，分享你们的实践经验，有机会获得 Egg 文化衫和相关周边喔~\n另外，第 10000 Star 的同学 <a href=\"https://github.com/zhyjor\">godmeir</a> 请联系我们。</p>\n<p><a href=\"https://www.zhihu.com/question/273783655\">『2018 年 EggJS 怎么样了？对它的看法有什么变化？』</a></p>\n<p><img src=\"https://cdn.nlark.com/yuque/0/2018/png/84182/1537602940849-da573bac-6899-47c1-ae18-e288e6d6fe79.png\" alt=\"image.png | left | 600x800\"></p>\n<hr>\n<h2>开发者体验优化</h2>\n<p>接下来跟大家分享下这段时间来，我们在『开发者体验』方面做的一些优化。</p>\n<h3>TypeScript</h3>\n<p>这几年来 TypeScript 很受欢迎，它的静态类型检查，智能提示，IDE 友好性等特性，对于大规模企业级应用，是非常的有价值的，被视为是企业级 JS 开发的未来之一。</p>\n<p>阿里内部实践 TS 也蛮久了，在 5 个月前，也把我们的其中一部分成熟的实践，分享出来：\n<a href=\"https://zhuanlan.zhihu.com/p/35334932\">『天猪：当 Egg 遇到 TypeScript，收获茶叶蛋一枚』</a></p>\n<p>非常感谢 @吖猩 在这领域的持续贡献：</p>\n<ul>\n<li><a href=\"https://zhuanlan.zhihu.com/p/43181384\">ts-node 下错误堆栈问题排查小记</a></li>\n<li><a href=\"https://github.com/whxaxes/blog/issues/12\">Egg TS 改造总结</a></li>\n<li><a href=\"https://github.com/whxaxes/blog/issues/11\">Typescript 在 Egg + Vue 应用中的实践</a></li>\n</ul>\n<p>这块目前还在持续优化中，有兴趣的同学可以参与以下几项优化：</p>\n<ul>\n<li>egg-ts-helper 增加对 js 的支持，这样非 ts 的同学，也能享受到智能提示和静态检查的 Buffer 加成。</li>\n<li>完善插件自带的 d.ts 方便其他开发者。</li>\n<li>分享你的上层封装，如通过装饰器来注册路由或 AOP。（内部有不少实践，但还未达成共识）</li>\n</ul>\n<blockquote>\n<p>PS： Egg.js 本身不会使用 TypeScript 重写，对于框架本身而言，JS 的灵活性可以让它更容易实现一些特性，同时它也并没有那么复杂的业务逻辑，TypeScript 并无法给框架研发带来更多的帮助。</p>\n</blockquote>\n<h3>生命周期</h3>\n<p>之前 Egg 提供给开发者在启动期的钩子不多，只有 beforeStart 几个。\n感谢 killagu 同学给我们补充了更细致的生命周期，相关的 RFC 和文档如下：</p>\n<ul>\n<li><a href=\"https://github.com/eggjs/egg/issues/2520#issuecomment-399008659\">[RFC] egg-core 增加应用启动阶段 · Issue #2520 </a></li>\n<li><a href=\"https://eggjs.app/zh-cn/advanced/loader.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F\">Egg 文档 - 生命周期</a>  （目前文档还有较大的优化空间，我们将在后续继续完善。）</li>\n</ul>\n<pre class=\"prettyprint language-javascript\"><code>&#x2F;&#x2F; app.js\nclass AppBootHook {\n  configDidLoad() {\n    &#x2F;&#x2F; Config, Plugin files have did load.\n  }\n\n  async didLoad() {\n    &#x2F;&#x2F; All files have did load, start plugin here.\n  }\n\n  async willReady() {\n    &#x2F;&#x2F; All plugins have started, can do some thing before app ready.\n  }\n\n  async didReady() {\n    &#x2F;&#x2F; Worker is ready, can do some things don&#x27;t need to block the app boot.\n  }\n\n  async serverDidReady() {\n    &#x2F;&#x2F; Server is listening.\n  }\n\n  async beforeClose() {\n    &#x2F;&#x2F; Do some thing before app close.\n  }\n}\n</code></pre><h3>Alinode</h3>\n<p>Node 发展到今天，已经被越来越广泛地应用到前后端分离、全栈开发、客户端工具等领域。\n然而，相对于应用层的蓬勃发展，其 Runtime 对于绝大部分前端出身的开发者来说，处于黑盒的状态，这一点并没有得到很好的改善，从而也阻碍了 Node.js 在业务中的应用和推广。</p>\n<p>作为一个 Node 开发者，最头痛的事莫过于莫名其妙的 CPU 100% 和内存泄露导致的 OOM。</p>\n<p>所幸的是，阿里云 @朴灵 团队的 <a href=\"https://www.aliyun.com/product/nodejs\">Node.js 性能平台</a> 为 Node 开发者提供了：<code>性能监控、安全提醒、故障排查、性能优化</code> 等服务的整体性解决方案，提供完善的工具链和服务，协助开发者快速发现和定位线上问题。这些年来，为我们解决了非常多的线上问题，为业务保驾护航。</p>\n<p>相关分享：</p>\n<ul>\n<li><a href=\"https://zhuanlan.zhihu.com/p/41178823\">Node 案发现场揭秘 —— Coredump 还原线上异常</a></li>\n<li><a href=\"https://zhuanlan.zhihu.com/p/34702356\">一行 delete require.cache 引发的内存泄漏血案</a></li>\n<li><a href=\"https://eggjs.app/zh-cn/core/deployment.html#nodejs-%E6%80%A7%E8%83%BD%E5%B9%B3%E5%8F%B0alinode\">Egg 文档 - Alinode 一键接入</a></li>\n</ul>\n<p>当然，在日常的答疑中，很多同学也表达了对数据安全方面的担忧。从我个人的角度来看，Alinode 的采集脚本，都是开源了，不会采集隐私数据。实在不行，在压测期接入用用也行，绝对可以让我们少掉一点头发，良心推荐。</p>\n<h3>和 Java 互联互通的方案</h3>\n<p>Node.js 在蚂蚁和阿里已经发展了四、五年时间，从最开始「前端工程师的玩具」，到 Web、BFF 场景的破局，逐步走到线上甚至是一些核心业务，非常不容易。</p>\n<p>回头想想 Nodejs 为什么能活下来？依靠的绝不仅仅是：非阻塞I/O、事件驱动、轻量这些官方宣传的特性，<strong>我们认为更重要一点是我们打通了和 Java 的桥梁，实现了互联互通，这才让它真正融入阿里的技术体系。</strong></p>\n<p>伴随 <a href=\"https://www.cloud.alipay.com/products/SOFA\">蚂蚁 SOFA Java 技术栈</a> 的开源，我们也开源了 Nodejs RPC 相关模块，希望能填补 Nodejs 社区这块的空白，也将我们几年来在 Nodejs 基础技术的一些经验做个总结和分享。</p>\n<p>推荐阅读小丸子姐姐的相关科普文章：</p>\n<ul>\n<li><a href=\"https://zhuanlan.zhihu.com/p/38004479\">Eggjs 和 SOFA 的跨语言互调</a></li>\n<li><a href=\"https://zhuanlan.zhihu.com/p/38012481\">聊聊 Node.js RPC（一）— 协议</a></li>\n<li><a href=\"https://zhuanlan.zhihu.com/p/40606909\">聊聊 Node.js RPC（二）— 服务发现</a></li>\n</ul>\n<h3>egg-cnode</h3>\n<p>朴老师发起的 <a href=\"https://github.com/cnodejs/egg-cnode\">cnodejs/egg-cnode</a> 项目，用 Egg 重写了 cnode 社区应用。\n目前完成了功能层面的重构以及测试用例的补全：</p>\n<ul>\n<li>文件数减少 41，减少 22%</li>\n<li>代码行数减少 2460 行，减少 4.7%</li>\n<li>测试代码减少 980 行，减少 39%，覆盖率高于原项目。</li>\n</ul>\n<p>目前还有较大的优化空间，因为第一阶段专注于功能迁移，不做大的优化，有些使用方式不符合 Egg 的最佳实践，欢迎有兴趣的同学加入一起完善。</p>\n<h3>值得关注的 RFC 和分享</h3>\n<blockquote>\n<p>在 eggjs 团队的日常协作中，遵循「基于 GitLab 的硬盘式异步协作模式」。\n通过 <a href=\"https://github.com/eggjs/egg/issues\">issue</a> 发起 RFC 提案 -&gt; 讨论定稿-&gt; 提交 Pull Request -&gt; Code Review -&gt; 发布。\n这样便于沉淀，即使是当时没有参与讨论的开发者，事后也能通过 issue 了解某个功能设计的前因后果。</p>\n</blockquote>\n<p><strong>Θ 来自 <strong><a href=\"https://www.yuque.com/\">语雀团队</a></strong> 的 ORM 实践分享</strong></p>\n<ul>\n<li>语雀是基于 Egg 技术栈研发的，算是为数不多的涉及到各个技术点的 Node 大应用。</li>\n<li><a href=\"https://eggjs.app/zh-cn/tutorials/sequelize.html\">Egg 文档 - Sequelize</a></li>\n</ul>\n<p><strong>Θ 与 Webpack 等前端工程的实践分享</strong></p>\n<ul>\n<li><a href=\"https://eggjs.app/zh-cn/tutorials/assets.html\">Egg 文档 - Assets 静态资源</a></li>\n<li>来自 <a href=\"https://zhuanlan.zhihu.com/easywebpack\">easywebpack</a> 的实践</li>\n<li>上层同构框架：<a href=\"https://github.com/alibaba/beidou\">alibaba/beidou</a> 和 <a href=\"https://zhuanlan.zhihu.com/p/41947819\">Serlina</a></li>\n</ul>\n<p><strong>Θ 错误处理 &amp;&amp; 问题跟踪</strong></p>\n<ul>\n<li><a href=\"https://github.com/eggjs/egg/issues/39\">[RFC] egg-opentracing · Issue #39</a></li>\n<li><a href=\"https://github.com/eggjs/egg/issues/1086\">[RFC] 应用自定义 4xx 和 5xx 的方案 · Issue #1086</a></li>\n<li><a href=\"https://github.com/eggjs/egg/issues/1898#issuecomment-386823829\">[RFC] 统计 egg 加载过程的各步骤的耗时 · Issue #1898</a></li>\n<li><a href=\"https://github.com/eggjs/egg/issues/2897\">handle unconsume multipart request data in egg itself. · Issue #2897</a></li>\n</ul>\n<p><strong>Θ 工具优化</strong>\n目前的 egg-init 存在以下问题：</p>\n<ul>\n<li>脚手架逻辑集中化，全部在 egg-init 本身，作为全局命令，更新不方便。</li>\n<li>模板无法定制自己的逻辑，无法代码共享。</li>\n<li>没有 sub generator，如 egg-init add controller Test 这样的功能。</li>\n<li>脚手架只在项目初始化时用到，无法支撑升级功能，容易腐化和分裂。</li>\n<li>上层封装不方便，不支持 preset 。</li>\n</ul>\n<p>因此提出了 『<a href=\"https://github.com/eggjs/egg/issues/2892\">[RFC] egg-init refactor </a>』，应该下个月可以完工并分享给大家。</p>\n<p><strong>Θ 科普文</strong>\n提到 Egg 值得自豪的应该是我们的文档吧，我们深知前端开发者在后端知识面还有很多需要科普的，也很乐意分享我们的实践：</p>\n<p><a href=\"https://zhuanlan.zhihu.com/p/36240171\">『专访死马：为什么说Egg.js是企业级Node框架』</a></p>\n<ul>\n<li><a href=\"https://zhuanlan.zhihu.com/p/39226941\">科普文：运维不给升级 Node 版本怎么办？</a></li>\n<li><a href=\"http://zhuanlan.zhihu.com/p/39209596\">科普文：为什么不能在服务器上 npm install ？</a></li>\n<li><a href=\"https://zhuanlan.zhihu.com/p/38012481\">聊聊 Node.js RPC（一）— 协议</a></li>\n<li><a href=\"https://zhuanlan.zhihu.com/p/40606909\">聊聊 Node.js RPC（二）— 服务发现</a></li>\n</ul>\n<h2>未来规划</h2>\n<p>老实说没有太多新特性，还是那个原因：<strong>Egg 采用的是『微内核 + 插件 + 上层框架』模式。</strong></p>\n<p>Egg 自身的迭代采取插件化的开发机制，功能分散在不同的模块中，可能开发者在使用时感知不到它的版本变更，但其实它一直都在进化。每周都可能有新特性和 BugFix 发布，更像是一个『改良派』而不是『改革派』，它会在兼容的前提下不断进化。</p>\n<p>接下来的规划，还将继续放在 <strong>『开发者体验优化 + 实践经验分享』</strong> 方面。</p>\n<ul>\n<li>egg cli 工具链和骨架的重构优化。</li>\n<li>TypeScript 的继续优化，以及增加对 js 项目智能提示方面的支持。</li>\n<li>更多的实践项目和科普分享。</li>\n<li>国际化。</li>\n</ul>\n<p>仅凭我们自己的精力是远远不够的，欢迎社区的大家一起加入，共同推动 Node 的发展。</p>\n<h2>写在最后</h2>\n<ul>\n<li>如果你喜欢 Egg，请支持我们：</li>\n<li>分享本文，为我们点赞。</li>\n<li>来分享下你们的实践，无论大小，这很重要，谢谢，将有机会获得我们的文化衫。</li>\n</ul>\n<p><a href=\"https://www.zhihu.com/question/273783655\">『2018 年 EggJS 怎么样了？对它的看法有什么变化？』</a></p>\n<ul>\n<li>如果喜欢我的文章，请关注 <a href=\"https://www.zhihu.com/question/273783655\">我的知乎</a> 和 <a href=\"https://www.zhihu.com/question/273783655\">Follow GitHub</a> 。</li>\n<li>广州阿里游戏，招前端，熟悉动效，Node 的速来~</li>\n</ul>\n</div>",
                "title": "EggJS 10000 Star + 2 years - 阿里 Node 企业级框架 ✨✨✨",
                "last_reply_at": "2018-10-25T08:07:55.340Z",
                "good": true,
                "top": true,
                "reply_count": 48,
                "visit_count": 7771,
                "create_at": "2018-09-22T08:29:22.948Z",
                "author": {
                    "loginname": "atian25",
                    "avatar_url": "https://avatars2.githubusercontent.com/u/227713?v=4&s=120"
                }
            },
            {
                "id": "5b911f1837b3005a0b0e6c16",
                "author_id": "55500f555809a4b66f37f625",
                "tab": "share",
                "content": "<div class=\"markdown-text\"><h2>活动说明</h2>\n<h3>本次活动由蚂蚁金服-国际事业群-前端团队承办。</h3>\n<blockquote>\n<ul>\n<li>时间：2018 年 9 月 23 日 14:00 - 18:00</li>\n<li>地点：浙大玉泉校区邵逸夫科学馆 117 会堂</li>\n<li>报名链接：<a href=\"https://www.bagevent.com/event/1843696\">https://www.bagevent.com/event/1843696</a></li>\n</ul>\n</blockquote>\n<hr>\n<h2>活动的主题如下（包括PPT）：</h2>\n<h3>《DataHub2 - 你的最后一个 mock 方案》</h3>\n<p>PPT：<a href=\"https://www.yuque.com/attachments/yuque/0/2018/pdf/95383/1537925050307-1fa501d9-b3fd-44c7-953b-8291d2c86ea8.pdf\" title=\"size:5046844\">download: DataHub.pdf</a></p>\n<p>分享时间：14:00 - 14:40</p>\n<p>主讲人介绍：张宇恒(<a href=\"https://github.com/zhangyuheng\">@zhangyuheng</a>) - 蚂蚁国际高级前端工程师，<a href=\"https://github.com/macacajs/macaca-datahub\">DataHub</a> 核心开发，格言：To Be A Better Hacker 。</p>\n<p><img src=\"//static.cnodejs.org/FuvmcnVJIRbF-xqcrJDFfiag0bSi\" alt=\"1536220954455-08024e18-182c-4e9c-8534-99ca63d0dd4b.png | left\"></p>\n<p>内容：DataHub 是为解决复杂业务场景而诞生，但同时能够渐进式退化，为项目研发提供通用的 mock 解决方案。舒适的 Web 研发体验，从研发、测试、联调阶段贯穿始终的数据提供能力，剖析如何设计一个 mock 平台的核心理念和实践范式。从开发瓶颈和服务演进的角度讲述「<strong>最后一个</strong>」mock 方案。</p>\n<h3>《蚂蚁国际前端工程体系》</h3>\n<p>分享时间：14:50 - 15:30</p>\n<p>主讲人介绍：徐达峰(<a href=\"https://github.com/xudafeng\">@xudafeng</a>) - 蚂蚁金服前端技术专家，阿里开源测试框架 <a href=\"https://github.com/alibaba/macaca\">Macaca</a> 作者，<a href=\"https://github.com/xudafeng/autoresponsive-react\">autoresponsive-react</a> 作者。</p>\n<p><img src=\"//static.cnodejs.org/FgCUNY56nLYcXl7pXP1zaCIKNmOJ\" alt=\"1536221094365-b2da0ffa-9103-478b-bd39-c8de3f06a0f2.png | left\"></p>\n<p>内容：介绍蚂蚁金服国际部门在国际化与本土化进程中遇到的挑战和成长。剖析中国技术出海的特点和如何快速构建合适的前端工程体系，也包括工具体系、持续交付、自动化测试等几个方向上的实践和思考。同时也会涉及 Macaca 技术生态的国际化成长。</p>\n<h3>《Node.js 微服务实践》</h3>\n<p>PPT：<a href=\"https://www.yuque.com/attachments/yuque/0/2018/pdf/95383/1537925145070-a192b890-1cbb-47da-bd4d-842671ceac98.pdf\" title=\"size:5178626\">download: Node.js 微服务实践.pdf</a></p>\n<p>分享时间：15:40 - 16:20</p>\n<p>主讲人介绍：高晓晨(<a href=\"https://github.com/gxcsoccer\">@gxcsoccer</a>) - 蚂蚁金服前端技术专家，企业级 Web 框架应用框架 <a href=\"https://github.com/eggjs\">Egg.js</a> 核心成员，<a href=\"https://github.com/alipay/sofa-rpc-node\">sofa-rpc-node</a> 作者。</p>\n<p><img src=\"//static.cnodejs.org/Fk0AYqZmVT5QmcnpFKO8AKCGjM-l\" alt=\"1536222500407-c710cca5-36d4-4685-a9d2-ba34163c39ff.png | left\"></p>\n<p>内容：介绍金服如何用 Node.js 来实现微服务，包括 RPC 原理、服务发现、负载均衡等话题。同时会介绍一下如何使用和扩展我们开源的 <a href=\"https://github.com/alipay/sofa-rpc-node\">sofa-rpc-node</a> 项目来帮助外部实现 RPC，为系统架构带来新活力。</p>\n<h3>《GraphQL 生态介绍》</h3>\n<p>PPT：<a href=\"https://www.yuque.com/attachments/yuque/0/2018/pdf/95383/1537925158919-2cd3bd39-31bd-4377-b347-33213489cde2.pdf\" title=\"size:4043353\">download: GraphQL.pdf</a></p>\n<p>分享时间：16:30 - 17:10</p>\n<p>主讲人介绍：张开宇(<a href=\"https://github.com/zhangkaiyulw\">@zhangkaiyulw</a>) - 前 Oracle 北京，香港 Beecrazy 员工。Ruby on Rails 贡献者之一。在后端，前端，移动端，以及 React Native 开发上，有丰富的经验。曾尝试将 iOS 系统的 Cocoa Touch API 风格移植到 HTML 网页中，并开发了基于其的一款国际象棋应用。有丰富大量的开源代码。</p>\n<p><img src=\"//static.cnodejs.org/Fln08dUMEWfnEFwd4gmpC8QJJP9O\" alt=\"1536220909272-71b9e8f9-1665-4b84-85a0-26d686b8a7c5.png | left\"></p>\n<p>内容：本次演讲介绍实现GraphQL API的工具，包括 apollo-server、merge-graphql-schemas、graphql-middleware、amur 脚手架工具以及他们的用法。并五分钟内演示带有上传功能，混合字段类型的，带有数据关联的复杂系统的 API。</p>\n<h3>《 Megalo - 考拉的小程序解决方案》</h3>\n<p>PPT：<a href=\"https://www.yuque.com/attachments/yuque/0/2018/pdf/95383/1537925172399-4ed1c6cc-479e-4e4a-b537-0b4353da8198.pdf\" title=\"size:1943122\">download: megalo-考拉的小程序解决方案.pdf</a></p>\n<p>分享时间：17:20 - 18:00</p>\n<p>主讲人介绍：网易考拉前端工程师，吴子然<a href=\"https://github.com/elcarim5efil\">@elcarim</a>，<a href=\"https://github.com/kaola-fed/mpregular\">mpregular</a>、<a href=\"https://github.com/kaola-fed/megalo\">megalo</a> 核心开发。</p>\n<p><img src=\"//static.cnodejs.org/Fh_VjuoZMUe_g5Tof53qU1iZ-wh_\" alt=\"网易考拉_吴子然.jpeg | left\"></p>\n<p>内容：介绍考拉的小程序框架发展历程，我们是如何在现有框架上做改造，在小程序上支持更多的 Vue 特性，让跨端开发变得更简单。</p>\n<hr>\n<h2>现场照片</h2>\n<p><img src=\"https://cdn.nlark.com/yuque/0/2018/png/95383/1537924550598-bf24d186-3ff1-494d-a4f2-3702fac3aa6a.png\" alt=\"image.png | left | 827x272\"></p>\n<p><img src=\"https://cdn.nlark.com/yuque/0/2018/png/95383/1537924563365-f723e300-5223-4fc4-8751-416c98b9afd3.png\" alt=\"image.png | left | 827x257\"></p>\n<p><img src=\"https://cdn.nlark.com/yuque/0/2018/png/95383/1537924608159-042af9f1-0880-4003-a3ec-2697cf38bf18.png\" alt=\"image.png | left | 827x620\"></p>\n<p><img src=\"https://cdn.nlark.com/yuque/0/2018/png/95383/1537924578426-21656c2f-8b66-4452-915d-51b3320fbabb.png\" alt=\"image.png | left | 827x620\"></p>\n<p><img src=\"https://cdn.nlark.com/yuque/0/2018/png/95383/1537924629304-e8547f9d-2bed-4b1c-bf50-cfbdd52f9d8e.png\" alt=\"image.png | left | 827x620\"></p>\n<p><img src=\"https://cdn.nlark.com/yuque/0/2018/png/95383/1537926665393-17bb8bbb-d585-4bc9-a7cc-80cad0d6596f.png\" alt=\"image.png | left | 827x602\"></p>\n<p><img src=\"https://cdn.nlark.com/yuque/0/2018/png/95383/1537924638476-713a60a3-43d9-4261-9f2e-672e4cf4487d.png\" alt=\"image.png | left | 827x620\"></p>\n<p><img src=\"https://cdn.nlark.com/yuque/0/2018/png/95383/1537924701018-cd3800f5-3940-4877-844c-29b7f1015e37.png\" alt=\"image.png | left | 827x615\"></p>\n<p><img src=\"https://cdn.nlark.com/yuque/0/2018/png/95383/1537926870402-15f18f5d-dbe9-4faf-a1b6-301e7fe5fe67.png\" alt=\"image.png | left | 827x606\"></p>\n<p><img src=\"https://cdn.nlark.com/yuque/0/2018/png/95383/1537926843721-002a0b79-235d-456e-8daf-5f3fde47b5b0.png\" alt=\"image.png | left | 827x604\"></p>\n<p><img src=\"https://cdn.nlark.com/yuque/0/2018/png/95383/1537925309980-a2262bf0-d3e6-4152-8150-1c8487cfda69.png\" alt=\"image.png | left | 827x607\"></p>\n<h3>特别感谢浙大软件学院对本次活动提供场地支持！</h3>\n<hr>\n<h2>关于 NodeParty</h2>\n<p><img src=\"https://cdn.nlark.com/yuque/0/2018/png/95383/1536228236464-a496d8a0-4862-4946-af56-b55fb7c68af3.png\" alt=\"image | center\"></p>\n<p>NodeParty 品牌诞生于 CNode 社区，杭州 NodeParty 是由大搜车（Souche Inc.）发起的一个面向 Node.js 爱好者的技术分享聚会，希望能够构建一个持续的分享学习的平台，一起发展 Node.js 生态。</p>\n</div>",
                "title": "第七期杭州 Node Party 回顾【附PPT】",
                "last_reply_at": "2018-10-17T07:50:19.775Z",
                "good": false,
                "top": true,
                "reply_count": 60,
                "visit_count": 9002,
                "create_at": "2018-09-06T12:35:36.197Z",
                "author": {
                    "loginname": "yllziv",
                    "avatar_url": "https://avatars1.githubusercontent.com/u/11460601?v=4&s=120"
                }
            },
            {
                "id": "5bd6d958d00aac1004de5216",
                "author_id": "55a8ba4c0b9ddb895675df3a",
                "tab": "share",
                "content": "<div class=\"markdown-text\"><p><a href=\"https://m.aliyun.com/act/team1111/#/share?params=N.EN2hxhpNQG.hxg93vdj\">双十一活动链接</a>\n每次阿里云的优惠活动都是针对新用户，让我们这些老用户只能是看看而已。\n不过老用户如果想要享受优惠的话还是有办法的，因为阿里云服务器是可以过户的。\n所以只需要借个亲戚或者朋友的账号，没有购买过阿里云服务器的。\n用他们的账号购买，5天之后就可以过户到自己的账号下了。\n<a href=\"https://help.aliyun.com/document_detail/72376.html\">https://help.aliyun.com/document_detail/72376.html</a></p>\n</div>",
                "title": "阿里云双十一拼团，官方千人大团，直接享受最低折扣",
                "last_reply_at": "2018-10-31T09:49:17.199Z",
                "good": false,
                "top": false,
                "reply_count": 4,
                "visit_count": 376,
                "create_at": "2018-10-29T09:56:40.993Z",
                "author": {
                    "loginname": "luluzero",
                    "avatar_url": "https://avatars1.githubusercontent.com/u/10164939?v=4&s=120"
                }
            },
            {
                "id": "5bd9772404de603bdb44813b",
                "author_id": "5b232f6429e6e510415b2aff",
                "tab": "ask",
                "content": "<div class=\"markdown-text\"><p>![K34$G<a href=\"//static.cnodejs.org/FsMR6NE0KZrP4asQ3q7AFVDIdK3r\">@)1G06FVMN4N5GMNX.png</a>\n图中的代码： 构造中怎么接收 getLogObj函数的值，求帮忙解答 谢谢！</p>\n</div>",
                "title": "es6 class 的constructor中如何调用 返回promise 的函数",
                "last_reply_at": "2018-10-31T09:34:28.472Z",
                "good": false,
                "top": false,
                "reply_count": 0,
                "visit_count": 20,
                "create_at": "2018-10-31T09:34:28.472Z",
                "author": {
                    "loginname": "chinahsj",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/36189354?v=4&s=120"
                }
            },
            {
                "id": "5bd81ed7d00aac1004de5289",
                "author_id": "56b3107271204e03637a37fa",
                "tab": "share",
                "content": "<div class=\"markdown-text\"><p>我已经购买， 欢迎加入组团一起购买，1核2G内存，99元每年\n<strong>本团满6人 没人都可以享受同样都优惠</strong>\n本团已有8人，参团就可以 享受最低优惠</p>\n<p><a href=\"https://m.aliyun.com/act/team1111/#/share?params=N.e4mwNVrMcv.pe4fguur\"></a><a href=\"https://m.aliyun.com/act/team1111/#/share?params=N.e4mwNVrMcv.pe4fguur\">https://m.aliyun.com/act/team1111/#/share?params=N.e4mwNVrMcv.pe4fguur</a></p>\n<p><img src=\"//static.cnodejs.org/Fkt1mrr4I2g8ar4DDTlvyHzE7j3E\" alt=\"image.png\"></p>\n</div>",
                "title": "本团已有8人，参团就可以享受 阿里云双11最低优惠",
                "last_reply_at": "2018-10-31T09:24:17.204Z",
                "good": false,
                "top": false,
                "reply_count": 3,
                "visit_count": 700,
                "create_at": "2018-10-30T09:05:27.345Z",
                "author": {
                    "loginname": "andythink",
                    "avatar_url": "https://avatars.githubusercontent.com/u/5006638?v=3&s=120"
                }
            },
            {
                "id": "5bd70b14d00aac1004de5228",
                "author_id": "5a3b17649807389a1809f5a5",
                "tab": "ask",
                "content": "<div class=\"markdown-text\"><p>一张订单表，一张预约表，现要在订单列表把这两张表的数据都显示出来，以时间排序，要分页，求给个思路啊</p>\n<p>来自酷炫的 <a href=\"https://github.com/TakWolf/CNode-Material-Design\">CNodeMD</a></p>\n</div>",
                "title": "两张不同的表要组合起来，以时间排序，望各位给个思路",
                "last_reply_at": "2018-10-31T09:23:03.374Z",
                "good": false,
                "top": false,
                "reply_count": 16,
                "visit_count": 388,
                "create_at": "2018-10-29T13:28:52.813Z",
                "author": {
                    "loginname": "Sxy97",
                    "avatar_url": "https://avatars3.githubusercontent.com/u/24429847?v=4&s=120"
                }
            },
            {
                "id": "5bd9721faba5b439efd990c7",
                "author_id": "5bd9708f04de603bdb4480c9",
                "tab": "ask",
                "content": "<div class=\"markdown-text\"><p>打好断点，Configuration配置了路径，debug运行后断点不断，断点上没有勾勾<img src=\"//static.cnodejs.org/FttIv0q2wFFjzH0nRbVx8GpFnBi2\" alt=\"WX20181031-171202@2x.png\"></p>\n</div>",
                "title": "webstorm断点调试不断",
                "last_reply_at": "2018-10-31T09:13:03.785Z",
                "good": false,
                "top": false,
                "reply_count": 0,
                "visit_count": 27,
                "create_at": "2018-10-31T09:13:03.785Z",
                "author": {
                    "loginname": "OstKakalo",
                    "avatar_url": "https://avatars1.githubusercontent.com/u/20947397?v=4&s=120"
                }
            },
            {
                "id": "5bd678398ca34e0b047041c1",
                "author_id": "59aa89ea9e95202d08c91ed3",
                "tab": "ask",
                "content": "<div class=\"markdown-text\"><p>异步函数返回promise，可不执行难以判断。\nReflect对象对此好像然并卵！各位大大有黑科技的高招？？</p>\n</div>",
                "title": "不执行函数~如何判断函数是异步函数还是普通函数",
                "last_reply_at": "2018-10-31T08:31:20.467Z",
                "good": false,
                "top": false,
                "reply_count": 19,
                "visit_count": 472,
                "create_at": "2018-10-29T03:02:17.016Z",
                "author": {
                    "loginname": "xinggsf",
                    "avatar_url": "https://avatars3.githubusercontent.com/u/13033798?v=4&s=120"
                }
            },
            {
                "id": "5bd91e86d00aac1004de5305",
                "author_id": "58d83c586f8b9bf02d1d0b1d",
                "tab": "ask",
                "content": "<div class=\"markdown-text\"><p>一眼看过去让人有维护的欲望\n并且能让开发者保持欲望 ,持续更新</p>\n</div>",
                "title": "最近在搭工程遇到一个哲学问,什么才是容易维护的项目",
                "last_reply_at": "2018-10-31T08:26:07.599Z",
                "good": false,
                "top": false,
                "reply_count": 3,
                "visit_count": 145,
                "create_at": "2018-10-31T03:16:22.674Z",
                "author": {
                    "loginname": "ResJay",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/26635410?v=4&s=120"
                }
            },
            {
                "id": "5bd965c879705c32260851ba",
                "author_id": "5a9783798d6e16e56bb80a34",
                "tab": "ask",
                "content": "<div class=\"markdown-text\"><p>有一个想法，有点类似众筹或者谷歌的模块手机。\n就是从一个0开始创建一个项目，任何人都可以参与进来贡献一小部分代码，通过票选机制择优选取功能模块，最终成为众望所归的一个产品。</p>\n<p>欢迎讨论。。。</p>\n<p>仓库：<a href=\"https://github.com/OXOYO/PureLand\">PureLand</a>\nREADME 如下</p>\n<h1>净土</h1>\n<p>加入我们，做你想做的事。</p>\n<h2>目标</h2>\n<p>从0开始创建一个程序（网站、框架等等）</p>\n<h2>宗旨</h2>\n<p>1.开源</p>\n<p>2.参与</p>\n<p>3.享受</p>\n<h2>License</h2>\n<p><a href=\"http://opensource.org/licenses/MIT\">MIT</a></p>\n</div>",
                "title": "一个想法，做你想做的事",
                "last_reply_at": "2018-10-31T08:20:24.292Z",
                "good": false,
                "top": false,
                "reply_count": 0,
                "visit_count": 60,
                "create_at": "2018-10-31T08:20:24.292Z",
                "author": {
                    "loginname": "OXOYO",
                    "avatar_url": "https://avatars3.githubusercontent.com/u/5074207?v=4&s=120"
                }
            },
            {
                "id": "5bd92aed8ca34e0b047042e6",
                "author_id": "5aa77f8ef5dfc27d7ad98773",
                "tab": "ask",
                "content": "<div class=\"markdown-text\"><p>项目使用egg，ts，请求方式用的egg自带的curl，项目主要配置如下：\n/config.default.js\n…\nconfig.httpclient = {\n\trequest: {\n\t\ttimeout: 40000,\t\n\t}\n}\n…\n编译报错，报错信息： 不能将类型“{ request: { timeout: number; }; }”分配给类型“PowerPartial&lt;{ keepAlive: boolean; freeSocketKeepAliveTimeout: number; timeout: number; maxSockets: number; maxFreeSockets: number; enableDNSCache: boolean; }&gt;”。\n对象文字可以只指定已知属性，并且“request”不在类型“PowerPartial&lt;{ keepAlive: boolean; freeSocketKeepAliveTimeout: number; timeout: number; maxSockets: number; maxFreeSockets: number; enableDNSCache: boolean; }&gt;”中。</p>\n<p>如果设置成\nconfig.httpclient = {\n\t\ttimeout: 40000,\t\n}\n编译不报错，但是没有达到效果，还走的是curl的默认值。\n改了 /typings/index.d.ts 如下：\ndeclare module ‘egg’ {\ninterface PowerPartial {\nrequest: any;\n}\n}\n然而还是编译报错…</p>\n</div>",
                "title": "egg + ts 设置请求超时",
                "last_reply_at": "2018-10-31T07:17:47.146Z",
                "good": false,
                "top": false,
                "reply_count": 3,
                "visit_count": 84,
                "create_at": "2018-10-31T04:09:17.353Z",
                "author": {
                    "loginname": "Helovebai",
                    "avatar_url": "https://avatars1.githubusercontent.com/u/26702657?v=4&s=120"
                }
            },
            {
                "id": "5bd9341aad4ad129f476dd0b",
                "author_id": "5b548af74b9cd4200f942199",
                "tab": "ask",
                "content": "<div class=\"markdown-text\"><p>本机测试成功，服务器上报错连接不上SMTP服务器\n如下代码</p>\n<pre class=\"prettyprint\"><code>const nodemailer = require(&#x27;nodemailer&#x27;)\nclass Email{\n    constructor(){\n        this.config= {\n            host: &#x27;smtp.qq.com&#x27;,  &#x2F;&#x2F;SMTP服务器\n            port: 25,\n            auth: {\n                user: &#x27;XXXXXXX@qq.com&#x27;, &#x2F;&#x2F;邮箱账号\n                pass: &#x27;XXXXXXXX&#x27;  &#x2F;&#x2F;邮箱的授权码，不是注册时的密码\n            }\n        }\n    }\n   async send({email,code}){\n        const mail={\n            &#x2F;&#x2F; 发件人\n            from: &#x27;天空社区验证码&lt;XXXXXX@qq.com&gt;&#x27;,\n            &#x2F;&#x2F; 主题\n            subject: &#x27;验证码&#x27;,\n            &#x2F;&#x2F; 收件人\n            to:email,    &#x2F;&#x2F;邮箱地址\n            &#x2F;&#x2F; 邮件内容，HTML格式\n            text: code &#x2F;&#x2F;接收激活请求的链接\n         }\n        const transporter =await nodemailer.createTransport(this.config)  &#x2F;&#x2F;建立连接关系\n        transporter.sendMail(mail,(err,info)=&gt;{\n            if(err){console.log(new Error(err))}\n        })\n    }\n}\nconst p = new Email()\np.send({\n    email:&#x27;XXXXXX@qq.com&#x27;,code:&quot;4556&quot;\n})\n</code></pre></div>",
                "title": "ubuntu服务端使用nodemailer发送不了邮件",
                "last_reply_at": "2018-10-31T06:59:33.709Z",
                "good": false,
                "top": false,
                "reply_count": 4,
                "visit_count": 84,
                "create_at": "2018-10-31T04:48:26.106Z",
                "author": {
                    "loginname": "pretty-foam",
                    "avatar_url": "https://avatars3.githubusercontent.com/u/34409208?v=4&s=120"
                }
            },
            {
                "id": "5bd90d5bd00aac1004de52f8",
                "author_id": "56322ce4268d85fd291adeef",
                "tab": "share",
                "content": "<div class=\"markdown-text\"><p><img src=\"//static.cnodejs.org/Frk8mn3JI5VfNtM2lEyZq2WNOCfk\" alt=\"30593221668988233.jpg\">\n<img src=\"//static.cnodejs.org/FkSoInXD0lzMo_WXaHl_izeS8omE\" alt=\"30633221713092764.jpg\"></p>\n<p><strong>freeCodeConf介绍</strong>\nfreeCodeConf 是 freeCodeCamp 中国举办的每年一度大型联动技术大会，旨在联合 freeCodeCamp 各城市本地开发者社区，促进高度垂直、高度人才集中、高度明星企业集结的互联网与软件行业技术交流。\n第一届 freeCodeConf 将于 2018 年 11 月 10 日在上海、天津、深圳、成都、西安、武汉、北京、杭州、广州、重庆、郑州、济南全国 12 个城市同期举办，诚邀广大开发者共享技术盛宴。</p>\n<p><strong>freeCodeConf杭州社区介绍</strong>\nfreeCodeCamp 杭州社区是一个致力于为广大技术爱好者以及用户提供的一个开放交流学习平台，主要以提升自身技术能力与项目开发水平为目的，为杭州前端圈的技术工程师、爱好者提供一场技术交流会。此次如果您期望观望一下新的单位不妨来看一看。</p>\n<p><strong>活动历史</strong>\n<img src=\"//static.cnodejs.org/FvyaH925XYB42lkdrm_678eMvKfM\" alt=\"30183221700942370.jpg\">\n<em>FCC杭州社区 Coffee &amp; Code #01</em>\n<img src=\"//static.cnodejs.org/FhQCjlx-BA6-yDSapiwFkoKOcWLw\" alt=\"30283221702302410.jpg\">\n<em>FCC杭州社区 Coffee &amp; Code #02</em>\n<img src=\"//static.cnodejs.org/FkLRW7tWgxhSYPcYtZHhWgjyXScL\" alt=\"30403221700172332.jpg\">\n<em>FCC杭州社区 Coffee &amp; Code #03</em>\n<img src=\"//static.cnodejs.org/Fn6mjcanMnlkekmxeq17Npwty79g\" alt=\"30233221700062326.jpg\">\n<em>FCC杭州社区 Coffee &amp; Code #04</em></p>\n<p><strong>活动介绍</strong></p>\n<ol>\n<li>\n<p>活动信息\n时间：2018-11-10  13:00-17:30\n地点：杭州市余杭区中国人工智能小镇11号楼3F-302室\n<img src=\"//static.cnodejs.org/FnQoYzCZEJ1tdcC5fgn78_9d5tZU\" alt=\"30733221699942320.jpg\"></p>\n</li>\n<li>\n<p>活动流程\n13：00 - 13：30  活动签到\n13：30 - 14：15  《如何基于 graphene 开发智能合约》\n14：15 - 14：20  问答环节\n14：20 - 15：05  《基于 VUE SSR 的前后端同构解决方案》\n15：05 - 15：10  问答环节\n15：10 - 15：20  休息时间\n15：20 - 16：05  《透过 Vue 来看前端团队的技术栈演进》\n16：05 - 16：10  问答环节\n16：10 - 17：05  嘉宾分享 - 待公布……\n17：05 - 17：10  问答环节\n17：10 - 17：20  合照留恋\n17：30 - 18：15  茶话会</p>\n</li>\n<li>\n<p>讲师介绍\n《如何基于 Graphene 开发智能合约》 - 公信宝区块链架构师\n<img src=\"//static.cnodejs.org/FtlPrliBby5gFqoWQmZIn1iiE0Mp\" alt=\"zhuliting.png\">\n朱礼廷：重庆邮电大学信息与计算科学专业(学士), 杭州电子科技大学计算机应用技术专业(硕⼠)，Graphene社区开发者，graphene 区块链应用中心技术顾问，熟悉区块链底层技术开发，精通C++、Python、Shell，曾就职于Vobile资深C++开发工程师，现任公信宝区块链架构师。</p>\n<p>《基于 Vue SSR 的前后端同构解决方案》 - 微医前端运营支撑团队负责人\n<img src=\"//static.cnodejs.org/FmeqM_btkYu2A-TXtohYdWwN5OeC\" alt=\"WechatIMG631.jpeg\">\n楼云龙：现任微医前端运营支撑团队负责人，兼基础架构和工具建设。主导的重要项目有：可视化运营活动工具、基于 Vue 的 UI 组件库、基于 Vue SSR 的前后端同构解决方案。</p>\n<p>《透过 Vue 来看前端团队的技术栈演进》 - 宋小菜前端架构师\n<img src=\"//static.cnodejs.org/FhyFleJI9hYgPR0eF9V2mge4_-3z\" alt=\"WechatIMG767.jpeg\">\n陈锦辉：早年搞 Java 后端，后转 Android/iOS 原生应用，直到遇到 Node/ReactNative，彻底投入大前端怀抱，目前专注前端（App/PC Web/微信生态链）的跨端工程运维体系搭建，以及跨前后端团队的数据聚合服务层架构，痴迷追根溯源，乐于探索布道新技术。</p>\n</li>\n<li>\n<p>现场招聘\n本次活动会有企业进行现场招聘，如果您在找工作或者看工作机会，不妨带上您的简历前来了解一下。\n<img src=\"//static.cnodejs.org/FuM5pcFVd57X5hoO4PJCv1CT4UZh\" alt=\"WechatIMG868.jpeg\">\n<img src=\"//static.cnodejs.org/Fq5eqA9ddUSS4u0VzsAOOpckK6zs\" alt=\"30773221684041678.jpg\">\n<img src=\"//static.cnodejs.org/Fkleaplrx7ytZ7TOQYnIH6SQCDuG\" alt=\"雷数科技.png\"></p>\n</li>\n<li>\n<p>合作伙伴（排名不分先后）\n<img src=\"//static.cnodejs.org/Fp24FpAKXHv7I6hXFNVFfcUMBDCL\" alt=\"30543221684231686.jpg\">\n<img src=\"//static.cnodejs.org/FmbUAm-TcQo9hr-9v5mU06-Zb47-\" alt=\"30613221679901502.jpg\">\n<img src=\"//static.cnodejs.org/Fj1-aReWkYwDBEhEdpA2MMkvSuy-\" alt=\"30623221678931461.jpg\">\n<img src=\"//static.cnodejs.org/FqMr7IsP1gAx7AupCsglXIg2KZ5x\" alt=\"30803221680811546.jpeg\">\n<img src=\"//static.cnodejs.org/FuM5pcFVd57X5hoO4PJCv1CT4UZh\" alt=\"WechatIMG868.jpeg\">\n<img src=\"//static.cnodejs.org/FrbHC3sO3YGPJvNzb9odvfh2EkLC\" alt=\"30583221681791588.jpg\">\n<img src=\"//static.cnodejs.org/FlgUs5WW6L1vJqMoZH4uv7Kzn4yJ\" alt=\"30443221697462232.jpg\">\n<img src=\"//static.cnodejs.org/FqmprusZSUNIILVXdBgn4sYMzu3_\" alt=\"30573221686071780.jpg\">\n<img src=\"//static.cnodejs.org/Fr0CwII7btNLJLyHMAp2188a8kXH\" alt=\"30583221681021555.jpg\">\n<img src=\"//static.cnodejs.org/Fq5eqA9ddUSS4u0VzsAOOpckK6zs\" alt=\"30773221684041678.jpg\">\n<img src=\"//static.cnodejs.org/FroLaOMScBReUgvFjb40A3MXf1wn\" alt=\"WechatIMG880.jpeg\"><img src=\"//static.cnodejs.org/Fg9OAZIEkNGNVAsijUvdkL5Hnk0h\" alt=\"30273221680511532.jpg\"></p>\n</li>\n<li>\n<p>报名地址：<a href=\"http://www.huodongxing.com/event/4462597580400\">传送门</a></p>\n</li>\n</ol>\n<p>如您公司或朋友单位需要现场招聘、赞助、合作请联系\n（扫二维码详谈）\n<img src=\"//static.cnodejs.org/FmRbY-iqJO5HFFFnmWX576yfzgF3\" alt=\"30423221693902081.jpeg\"></p>\n</div>",
                "title": "《2018 freeCodeConf 杭州站》",
                "last_reply_at": "2018-10-31T06:18:05.384Z",
                "good": false,
                "top": false,
                "reply_count": 4,
                "visit_count": 99,
                "create_at": "2018-10-31T02:03:07.252Z",
                "author": {
                    "loginname": "DamonChan",
                    "avatar_url": "https://avatars1.githubusercontent.com/u/4902684?v=4&s=120"
                }
            },
            {
                "id": "5bd9458d9146413214744733",
                "author_id": "5bb02cd39545eaf107b9c72e",
                "tab": "share",
                "content": "<div class=\"markdown-text\"><p><a href=\"https://m.aliyun.com/act/team1111/#/share?params=N.ij7d55C3dd.7hyxmumt\">团战地址</a>\n新会员享一折优惠，老会员拉新获千元红包+25%返现</p>\n<p>现在已近6人了\n<img src=\"//static.cnodejs.org/Fq6y8ZMFdN-VwnUIShO-P91GoVjb\" alt=\"image.png\"></p>\n</div>",
                "title": "双十一阿里云打折参团",
                "last_reply_at": "2018-10-31T06:02:53.285Z",
                "good": false,
                "top": false,
                "reply_count": 0,
                "visit_count": 50,
                "create_at": "2018-10-31T06:02:53.285Z",
                "author": {
                    "loginname": "afacode",
                    "avatar_url": "https://avatars3.githubusercontent.com/u/24989232?v=4&s=120"
                }
            },
            {
                "id": "5bd7c062d00aac1004de524c",
                "author_id": "5bd7bd7ad00aac1004de5249",
                "tab": "share",
                "content": "<div class=\"markdown-text\"><p>阿里云双十一云服务器活动大家一起来拼团，我参加的团已经把价格打到最低价了。99元一年的云服务器，有需要的可以考虑一波。\n<a href=\"https://m.aliyun.com/act/team1111/#/share?params=N.9g4CZ2TwSh.qilw7y0a\">https://m.aliyun.com/act/team1111/#/share?params=N.9g4CZ2TwSh.qilw7y0a</a></p>\n<p><img src=\"//static.cnodejs.org/FkDGQVNBfye-R5yV9JpK3IgUMmHi\" alt=\"1111.jpg\"></p>\n</div>",
                "title": "阿里云双十一云服务器拼团活动，已经打到最低价99元一年！",
                "last_reply_at": "2018-10-31T05:50:40.870Z",
                "good": false,
                "top": false,
                "reply_count": 8,
                "visit_count": 279,
                "create_at": "2018-10-30T02:22:26.130Z",
                "author": {
                    "loginname": "pysta3515",
                    "avatar_url": "https://avatars2.githubusercontent.com/u/16321757?v=4&s=120"
                }
            },
            {
                "id": "5bd9243c8ca34e0b047042e2",
                "author_id": "599e2723ebaa046923a826f0",
                "tab": "ask",
                "content": "<div class=\"markdown-text\"><p>如题，如果使用js写koa的时候，app.xx = xx 是完全没有问题的；\n但是在ts下编译器会报错，因为在定义中，koa的Application没有xx这个属性。\n观察了<a href=\"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/koa/index.d.ts\">types/koa</a>的写法，和egg有区别，不是很懂，感觉就是定义了一个class Application，以及一个空间，而这个class引用这空间，空间内的interface是可以扩展的，而这个Application似乎没找到怎么去弄。\n目前可以通过增加比如：</p>\n<pre class=\"prettyprint\"><code>declare module &#x27;koa&#x27; {\n  interface Context {\n    user: User | null;\n  }\n}\n</code></pre><p>这样来扩展ctx.user，然而没找到什么办法去扩展这个app，使得app.xx = xx在编辑器上是合法的，而且后续使用到app.xx 也会得到对应类型的提示。</p>\n</div>",
                "title": "如何扩展Koa的app，在ts下。",
                "last_reply_at": "2018-10-31T05:38:00.079Z",
                "good": false,
                "top": false,
                "reply_count": 2,
                "visit_count": 99,
                "create_at": "2018-10-31T03:40:44.528Z",
                "author": {
                    "loginname": "HobaiRiku",
                    "avatar_url": "https://avatars2.githubusercontent.com/u/26238803?v=4&s=120"
                }
            },
            {
                "id": "5bd7e082d00aac1004de526a",
                "author_id": "5267d2e99df724eb6db4fc1e",
                "tab": "share",
                "content": "<div class=\"markdown-text\"><p><a href=\"https://github.com/nodejs/Release#release-schedule\">Release schedule</a></p>\n<p>计划中就是2018-10-30，今天。</p>\n</div>",
                "title": "今天可能要发布Node10的LTS？",
                "last_reply_at": "2018-10-31T05:35:56.566Z",
                "good": false,
                "top": false,
                "reply_count": 13,
                "visit_count": 471,
                "create_at": "2018-10-30T04:39:30.499Z",
                "author": {
                    "loginname": "libook",
                    "avatar_url": "https://avatars1.githubusercontent.com/u/3395610?v=4&s=120"
                }
            },
            {
                "id": "5bd9134ed00aac1004de52fc",
                "author_id": "536af53d9968d761330390f7",
                "tab": "share",
                "content": "<div class=\"markdown-text\"><h2><a href=\"https://dwz.cn/pwNAkvjW\">阿里云2-5折高性能服务器</a></h2>\n<h2><a href=\"https://dwz.cn/WjpFci3x\">结合代金券</a></h2>\n<p>另外叠加购物车满1000减50的优惠，满2000减100，以此类推，价格比某某 云还便宜…</p>\n</div>",
                "title": "阿里云企业级服务器优惠打折啦~",
                "last_reply_at": "2018-10-31T04:13:46.925Z",
                "good": false,
                "top": false,
                "reply_count": 1,
                "visit_count": 69,
                "create_at": "2018-10-31T02:28:30.995Z",
                "author": {
                    "loginname": "skythinking",
                    "avatar_url": "https://avatars3.githubusercontent.com/u/7401507?v=4&s=120"
                }
            }
        ]
    })
    res.send(html);
    // console.log(html);
})

module.exports = router;