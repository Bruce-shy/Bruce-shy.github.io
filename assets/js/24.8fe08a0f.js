(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{510:function(_,t,v){"use strict";v.r(t);var a=v(2),s=Object(a.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"从输入url到页面完成加载发生了什么？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#从输入url到页面完成加载发生了什么？"}},[_._v("#")]),_._v(" 从输入url到页面完成加载发生了什么？")]),_._v(" "),v("h3",{attrs:{id:"目前的多进程架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#目前的多进程架构"}},[_._v("#")]),_._v(" 目前的多进程架构")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("浏览器进程")]),_._v("。主要负责用户交互、子进程管理和文件储存等功能。")]),_._v(" "),v("li",[v("strong",[_._v("渲染进程")]),_._v("。核心任务是将 HTML、CSS 和 JavaScript 转换为用户可以与之交互的网页。排版引擎 Blink 和 JavaScript 引擎 V8 都在上面。")]),_._v(" "),v("li",[v("strong",[_._v("GPU 进程")]),_._v("。起初是为了实现 3D CSS 的效果，后来UI界面都选择采用GPU来绘制。")]),_._v(" "),v("li",[v("strong",[_._v("网络进程")]),_._v("。主要负责页面的网络资源加载。")]),_._v(" "),v("li",[v("strong",[_._v("插件进程")]),_._v("。主要是负责插件的运行，因插件易崩溃，所以需要通过插件进程来隔离，以保证插件进程崩溃不会对浏览器和页面造成影响。")])]),_._v(" "),v("p",[_._v("打开 1 个页面至少需要 1 个网络进程、1 个浏览器进程、1 个 GPU 进程以及 1 个渲染进程，共 4 个；如果打开的页面有运行插件的话，还需要再加上 1 个插件进程。")]),_._v(" "),v("h3",{attrs:{id:"完整流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#完整流程"}},[_._v("#")]),_._v(" 完整流程")]),_._v(" "),v("p",[v("img",{attrs:{src:"E:%5CBlog%5Cdocs.vuepress%5Cpublic%5C%E6%B8%B2%E6%9F%93%E6%B5%81%E7%A8%8B.png",alt:"从输入 URL 到页面展示完整流程示意图"}})]),_._v(" "),v("p",[v("strong",[_._v("整个过程需要各个进程之间的配合")]),_._v("，大致描述为如下：")]),_._v(" "),v("ul",[v("li",[_._v("首先，用户从浏览器进程里"),v("strong",[_._v("输入请求信息")]),_._v("；")]),_._v(" "),v("li",[_._v("然后，网络进程"),v("strong",[_._v("发起 URL 请求")]),_._v("；")]),_._v(" "),v("li",[_._v("服务器响应 URL 请求之后，浏览器进程就又要开始"),v("strong",[_._v("准备渲染进程")]),_._v("了；")]),_._v(" "),v("li",[_._v("渲染进程准备好之后，需要先向渲染进程提交页面数据，我们称之为"),v("strong",[_._v("提交文档")]),_._v("阶段；")]),_._v(" "),v("li",[_._v("渲染进程接收完文档信息之后，便开始"),v("strong",[_._v("解析页面和加载子资源")]),_._v("，完成页面的渲染。")])]),_._v(" "),v("h4",{attrs:{id:"_1-用户输入"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-用户输入"}},[_._v("#")]),_._v(" 1. 用户输入")]),_._v(" "),v("ul",[v("li",[_._v("搜索内容，地址栏会使用浏览器默认的搜索引擎，来合成新的带搜索关键字的 URL。")]),_._v(" "),v("li",[_._v("符合 URL 规则，那么地址栏会根据规则，把这段内容加上协议，合成为完整的 URL。")])]),_._v(" "),v("h4",{attrs:{id:"_2-url-请求过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-url-请求过程"}},[_._v("#")]),_._v(" 2. URL 请求过程")]),_._v(" "),v("h5",{attrs:{id:"_2-1-查找浏览器缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-查找浏览器缓存"}},[_._v("#")]),_._v(" 2.1 查找浏览器缓存")]),_._v(" "),v("p",[_._v("网络进程会先查找本地缓存是否缓存了该资源，如果有，那么直接返回资源给浏览器进程。如果没有，直接进入网络请求流程。")]),_._v(" "),v("h5",{attrs:{id:"_2-2-dns解析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-dns解析"}},[_._v("#")]),_._v(" 2.2 DNS解析")]),_._v(" "),v("p",[_._v("DNS解析，获取服务器 ip 地址，建立TCP连接。如果请求协议是 HTTPS，还需要建立 TLS 连接。")]),_._v(" "),v("h5",{attrs:{id:"_2-3-建立-tcp-连接，三次握手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-建立-tcp-连接，三次握手"}},[_._v("#")]),_._v(" 2.3 建立 TCP 连接，三次握手")]),_._v(" "),v("p",[_._v("先等待 TCP 队列，同一个域名同时最多只能建立 6 个 TCP 连接，只有请求数量少于 6，才会建立 TCP 连接。")]),_._v(" "),v("h5",{attrs:{id:"_2-4-发送-http-请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-发送-http-请求"}},[_._v("#")]),_._v(" 2.4 发送 HTTP 请求")]),_._v(" "),v("p",[_._v("浏览器会向服务器发送请求行，包括请求方法、请求 URI 和 HTTP 版本协议。")]),_._v(" "),v("p",[_._v("常用的请求方法有 GET / POST，GET 用于请求数据 ，POST 用于 提交数据。")]),_._v(" "),v("h4",{attrs:{id:"_3-服务器端处理-http-请求流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-服务器端处理-http-请求流程"}},[_._v("#")]),_._v(" 3. 服务器端处理 HTTP 请求流程")]),_._v(" "),v("h5",{attrs:{id:"_3-1-重定向"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-重定向"}},[_._v("#")]),_._v(" 3.1 重定向")]),_._v(" "),v("p",[_._v("如果响应行状态码为 301 （永久重定向）和 302 （临时重定向），那么说明需要重定向到其他 URL。这时网络进程会从响应头的 Location 字段里面读取重定向的地址，然后再发起新的网络请求。")]),_._v(" "),v("h5",{attrs:{id:"_3-2-响应数据处理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-响应数据处理"}},[_._v("#")]),_._v(" 3.2 响应数据处理")]),_._v(" "),v("p",[_._v("浏览器会根据请求头的 "),v("strong",[_._v("Content-type")]),_._v(" 字段判断响应体数据的类型。")]),_._v(" "),v("p",[_._v("例如：Content-Type 的值是 application/octet-stream，显示数据是"),v("strong",[_._v("字节流类型")]),_._v("的，通常情况下，浏览器会按照"),v("strong",[_._v("下载类型")]),_._v("来处理该请求。如果是"),v("strong",[_._v("HTML，那么浏览器则会继续进行导航流程")]),_._v("。")]),_._v(" "),v("h4",{attrs:{id:"_4-准备渲染进程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-准备渲染进程"}},[_._v("#")]),_._v(" 4. 准备渲染进程")]),_._v(" "),v("p",[_._v("默认情况下，浏览器会为每个页面分配一个渲染进程。但如果是 "),v("strong",[_._v("同一站点")]),_._v("（根域名 + 协议），那么渲染进程就会被复用。")]),_._v(" "),v("h4",{attrs:{id:"_5-提交文档"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-提交文档"}},[_._v("#")]),_._v(" 5. 提交文档")]),_._v(" "),v("p",[_._v("这里的 '文档' 是指 URL 请求的响应体数据。")]),_._v(" "),v("ul",[v("li",[_._v("“提交文档”的消息是由浏览器进程发出的，渲染进程接收到“提交文档”的消息后，会和网络进程建立传输数据的“"),v("strong",[_._v("管道")]),_._v("”。")]),_._v(" "),v("li",[_._v("等文档数据传输完成之后，渲染进程会返回“"),v("strong",[_._v("确认提交")]),_._v("”的消息给浏览器进程。")]),_._v(" "),v("li",[_._v("浏览器进程在收到“确认提交”的消息后，会"),v("strong",[_._v("更新浏览器界面状态")]),_._v("，包括了安全状态、地址栏的 URL、前进后退的历史状态，并更新 Web 页面。")])]),_._v(" "),v("p",[_._v("到这里，一个完整的导航流程就“走”完了，这之后就要进入渲染阶段了。")]),_._v(" "),v("h3",{attrs:{id:"浏览器的渲染过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的渲染过程"}},[_._v("#")]),_._v(" 浏览器的渲染过程")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/10/16798b8db54caa31?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"浏览器渲染过程"}})]),_._v(" "),v("ol",[v("li",[_._v("解析HTML，生成DOM树，解析CSS，生成CSSOM树")]),_._v(" "),v("li",[_._v("将DOM树和CSSOM树结合，生成渲染树(Render Tree)")]),_._v(" "),v("li",[_._v("Layout(回流):根据生成的渲染树，进行回流(Layout)，得到节点的几何信息（位置，大小）")]),_._v(" "),v("li",[_._v("Painting(重绘):根据渲染树以及回流得到的几何信息，得到节点的绝对像素")]),_._v(" "),v("li",[_._v("Display:将像素发送给GPU，展示在页面上。（这一步其实还有很多内容，比如会在GPU将多个合成层合并为同一个层，并展示在页面中。）")])]),_._v(" "),v("h4",{attrs:{id:"构建-dom-树"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#构建-dom-树"}},[_._v("#")]),_._v(" 构建 DOM 树")]),_._v(" "),v("p",[v("strong",[_._v("浏览器无法直接理解和使用 HTML，所以需要将 HTML 转换为浏览器能够理解的结构——DOM 树")]),_._v("。")]),_._v(" "),v("h4",{attrs:{id:"样式计算"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#样式计算"}},[_._v("#")]),_._v(" 样式计算")]),_._v(" "),v("ol",[v("li",[_._v("把 CSS 转换成为 浏览器能够理解的结构 -- styleSheets。")]),_._v(" "),v("li",[_._v("转换样式表中的属性值，使其标准化(2em 被解析成了 32px，red 被解析成了 rgb(255,0,0)，bold 被解析成了 700……)。")]),_._v(" "),v("li",[_._v("计算出 DOM 树中每个节点的具体样式。")])]),_._v(" "),v("h4",{attrs:{id:"布局阶段-生成渲染树"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#布局阶段-生成渲染树"}},[_._v("#")]),_._v(" 布局阶段(生成渲染树)")]),_._v(" "),v("ol",[v("li",[_._v("创建布局树（渲染树）")]),_._v(" "),v("li",[_._v("布局计算 "),v("strong",[_._v("在显示之前，我们还要额外地构建一棵只包含可见元素布局树")])])]),_._v(" "),v("p",[v("img",{attrs:{src:"E:%5CBlog%5Cdocs.vuepress%5Cpublic%5C%E6%B8%B2%E6%9F%93%E6%A0%91.png",alt:"渲染树"}})]),_._v(" "),v("p",[_._v("为了构建渲染树，浏览器主要完成了以下工作：")]),_._v(" "),v("ol",[v("li",[_._v("从DOM树的根节点开始遍历每个可见节点。")]),_._v(" "),v("li",[_._v("对于每个可见的节点，找到CSSOM树中对应的规则，并应用它们。")]),_._v(" "),v("li",[_._v("根据每个可见节点以及其对应的样式，组合生成渲染树。")])]),_._v(" "),v("p",[_._v("第一步中，既然说到了要遍历可见的节点，那么我们得先知道，什么节点是不可见的。不可见的节点包括：")]),_._v(" "),v("ul",[v("li",[_._v("一些不会渲染输出的节点，比如script、meta、link等。")]),_._v(" "),v("li",[_._v("一些通过css进行隐藏的节点。比如display:none。注意，利用visibility和opacity隐藏的节点，还是会显示在渲染树上的。只有display:none的节点才不会显示在渲染树上。")])]),_._v(" "),v("h4",{attrs:{id:"回流（重排）和重绘"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#回流（重排）和重绘"}},[_._v("#")]),_._v(" 回流（重排）和重绘")]),_._v(" "),v("h5",{attrs:{id:"_1-更新了元素的几何属性（重排）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-更新了元素的几何属性（重排）"}},[_._v("#")]),_._v(" 1.更新了元素的几何属性（重排）")]),_._v(" "),v("p",[_._v("如果你通过 JavaScript 或者 CSS 修改元素的几何位置属性，例如改变元素的宽度、高度等，那么浏览器会触发重新布局，解析之后的一系列子阶段，这个过程就叫"),v("strong",[_._v("重排")]),_._v("。无疑，"),v("strong",[_._v("重排需要更新完整的渲染流水线，所以开销也是最大的")]),_._v("。")]),_._v(" "),v("ul",[v("li",[_._v("添加或删除可见的DOM元素")]),_._v(" "),v("li",[_._v("元素的位置发生变化")]),_._v(" "),v("li",[_._v("元素的尺寸发生变化（包括外边距、内边框、边框大小、高度和宽度等）")]),_._v(" "),v("li",[_._v("内容发生变化，比如文本变化或图片被另一个不同尺寸的图片所替代。")]),_._v(" "),v("li",[_._v("页面一开始渲染的时候（这肯定避免不了）")]),_._v(" "),v("li",[_._v("浏览器的窗口尺寸变化（因为回流是根据视口的大小来计算元素的位置和大小的）")])]),_._v(" "),v("p",[v("strong",[_._v("注意：回流一定会触发重绘，重绘不一定会回流")])]),_._v(" "),v("h5",{attrs:{id:"_2-更新元素的绘制属性（重绘）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-更新元素的绘制属性（重绘）"}},[_._v("#")]),_._v(" 2.更新元素的绘制属性（重绘）")]),_._v(" "),v("p",[_._v("通过 JavaScript 更改某些元素的背景颜色，并没有引起几何位置的变换，这个过程就叫"),v("strong",[_._v("重绘")]),_._v("。相较于重排操作，"),v("strong",[_._v("重绘省去了布局和分层阶段，所以执行效率会比重排操作要高一些")]),_._v("。")]),_._v(" "),v("h4",{attrs:{id:"浏览器的优化机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的优化机制"}},[_._v("#")]),_._v(" 浏览器的优化机制")]),_._v(" "),v("p",[_._v("大多数浏览器都会通过队列化修改并批量执行来优化重排过程。浏览器会将修改操作放入到队列里，直到过了一段时间或者操作达到了一个阈值，才清空队列。但是！"),v("strong",[_._v("当你获取布局信息的操作的时候，会强制队列刷新")]),_._v("，比如当你访问以下属性或者使用以下方法：")]),_._v(" "),v("ul",[v("li",[_._v("offsetTop、offsetLeft、offsetWidth、offsetHeight")]),_._v(" "),v("li",[_._v("scrollTop、scrollLeft、scrollWidth、scrollHeight")]),_._v(" "),v("li",[_._v("clientTop、clientLeft、clientWidth、clientHeight")]),_._v(" "),v("li",[_._v("getComputedStyle()")]),_._v(" "),v("li",[_._v("getBoundingClientRect")])]),_._v(" "),v("p",[_._v("以上属性和方法都需要返回最新的布局信息，因此浏览器不得不清空队列，触发回流重绘来返回正确的值。因此，我们在修改样式的时候，**最好避免使用上面列出的属性，他们都会刷新渲染队列。**如果要使用它们，最好将值缓存起来。")]),_._v(" "),v("h4",{attrs:{id:"减少回流和重绘"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#减少回流和重绘"}},[_._v("#")]),_._v(" 减少回流和重绘")]),_._v(" "),v("ul",[v("li",[_._v("最小化重绘和重排， 可以 通过合并多次DOM和样式的修改，然后一次处理掉。\n"),v("ol",[v("li",[_._v("使用 cssText(el.style.cssText)")]),_._v(" "),v("li",[_._v("直接通过修改类名的方式")])])]),_._v(" "),v("li",[_._v("避免频繁操作DOM结构，如果需要可以先把他们display:none(因为这些元素不会出现不会触发回流重绘), 等待dom操作结束之后再把它们放出来")]),_._v(" "),v("li",[_._v("避免触发同步布局事件")]),_._v(" "),v("li",[_._v("对于复杂动画效果，使用绝对定位让其脱离文档流")]),_._v(" "),v("li",[_._v("css3 硬件加速 (GPU 加速), 比如 transform、opacity、filters, 这些动画不会引起回流重绘")])])])}),[],!1,null,null,null);t.default=s.exports}}]);