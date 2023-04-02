(window.webpackJsonp=window.webpackJsonp||[]).push([[345],{746:function(t,a,r){"use strict";r.r(a);var e=r(2),i=Object(e.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"授权与认证"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#授权与认证","aria-hidden":"true"}},[t._v("#")]),t._v(" 授权与认证")]),t._v(" "),r("p",[t._v("认证与授权是计算机安全方面的两个基础概念。认证解决你是谁的问题 (who)，授权解决你能干什么的问题 (what)。计算机系统解决你是谁的问题，是依靠识别与人绑定的某种凭证来做判断的，比如通过判定预设的用户名和密码是否匹配，或者读取人持有的 IC 卡、RFID、NFC 等信息来识别人的身份，当然随着科技的发展计算机的外设已经可以识别生物特征比如指纹识别、虹膜、人脸等特征。当然，计算机系统的用户不仅仅是人，也可能是其他的机器或系统，所以有必要对各种认证的手段做一个抽象，基于声明 (claims-based) 的认证就是这样一种抽象。")]),t._v(" "),r("h2",{attrs:{id:"一个登机的例子"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一个登机的例子","aria-hidden":"true"}},[t._v("#")]),t._v(" 一个登机的例子")]),t._v(" "),r("p",[t._v("解释基于声明的认证这个概念之前先介绍一个大家比较熟悉的机场登机的场景。假定你准备从上海到北京出差并且已经通过携程、艺龙或者去哪儿买了一张从上海到北京的机票。那么接下来的流程是这样：")]),t._v(" "),r("ol",[r("li",[t._v("换登机牌。到值机柜台出示必要证件，工作人员核实你的身份以及购票记录给你一张登机牌。登机牌除了显示姓名、性别、航班号等基础信息外还包括登机口、登机时间等专有信息。登机牌还包含有条码可以被机场的专有扫描设备识别。")]),t._v(" "),r("li",[t._v("安全检查，用登机牌以及必要证件通过安全检查进入候机大厅。")]),t._v(" "),r("li",[t._v("候机及登机。根据登机牌指示登记时间和登机口等候并登机。")])]),t._v(" "),r("h2",{attrs:{id:"基本概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),r("h3",{attrs:{id:"身份-identity"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#身份-identity","aria-hidden":"true"}},[t._v("#")]),t._v(" 身份 (Identity)")]),t._v(" "),r("p",[t._v("标识一个用户或者一个实体。在上面的例子中，身份是坐飞机的人。")]),t._v(" "),r("h3",{attrs:{id:"声明-claim"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#声明-claim","aria-hidden":"true"}},[t._v("#")]),t._v(" 声明 (Claim)")]),t._v(" "),r("p",[t._v("Identity 的一系列属性比如姓名、email、角色等。在上面的例子中，声明指的是登机牌中展示的信息包括示姓名、性别、航班号等基础信息以及登机口、登机时间等专有信息。")]),t._v(" "),r("h3",{attrs:{id:"安全令牌-security-token"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安全令牌-security-token","aria-hidden":"true"}},[t._v("#")]),t._v(" 安全令牌 (Security Token)")]),t._v(" "),r("p",[t._v("将 Claim 的信息通过数字签名等技术手段得到的一个载体，由发行机构（机场）颁发。在上面的例子中，安全令牌就是登机牌，里面包含条形码等不可伪造的信息可以被机场的专有设备识别。通常在计算机系统中令牌可以仅仅是一个加密的信息，通过令牌可以向发行机构请求申明信息。")]),t._v(" "),r("h3",{attrs:{id:"发行机构-issuing-authroty"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#发行机构-issuing-authroty","aria-hidden":"true"}},[t._v("#")]),t._v(" 发行机构 (Issuing Authroty)")]),t._v(" "),r("p",[t._v("签发安全令牌的受信机构，可以是 Web 应用或 Web 服务。在上面的例子中发行机构是机场，它颁发登机牌。")]),t._v(" "),r("h3",{attrs:{id:"安全令牌服务-security-token-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安全令牌服务-security-token-service","aria-hidden":"true"}},[t._v("#")]),t._v(" 安全令牌服务 (Security Token Service)")]),t._v(" "),r("p",[t._v("提供构建安全令牌、签名、验证等服务。在上面的例子中，机场提供的值机台、安检口、登机口就是这种类型的服务。")]),t._v(" "),r("h3",{attrs:{id:"信任方应用-repling-party-application"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#信任方应用-repling-party-application","aria-hidden":"true"}},[t._v("#")]),t._v(" 信任方应用 (Repling Party Application)")]),t._v(" "),r("p",[t._v("信任发行机构，使用其颁发的安全令牌获得 Claim 的应用。在上面的例子中，这个信任方应用就是某航空公司提供的指定班次的飞行服务。")]),t._v(" "),r("h2",{attrs:{id:"基于申明的认证模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基于申明的认证模型","aria-hidden":"true"}},[t._v("#")]),t._v(" 基于申明的认证模型")]),t._v(" "),r("p",[r("img",{attrs:{src:"/funtl/assets/14358-60156f30589bd463.png",alt:""}})]),t._v(" "),r("p",[t._v("这幅图说明一个 Web 站点（信任方应用，relying party application, RP）使用基于申明的进行认证，被用户通过浏览器访问的过程。")]),t._v(" "),r("ol",[r("li",[t._v("未授权用户访问 Web 站点的页面会被重定向到身份提供者的页面。")]),t._v(" "),r("li",[t._v("身份提供者要求用户提供凭证，比如用户名和密码。")]),t._v(" "),r("li",[t._v("身份提供者颁发安全令牌返回到浏览器。")]),t._v(" "),r("li",[t._v("浏览器重定向到刚开始要访问的那个页面，Web 站点根据安全令牌决定是否允许访问。")])])])},[],!1,null,null,null);a.default=i.exports}}]);