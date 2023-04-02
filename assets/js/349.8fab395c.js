(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{772:function(t,a,r){"use strict";r.r(a);var e=r(2),s=Object(e.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"死信、延迟、重试队列"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#死信、延迟、重试队列","aria-hidden":"true"}},[t._v("#")]),t._v(" 死信、延迟、重试队列")]),t._v(" "),r("h2",{attrs:{id:"死信队列"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#死信队列","aria-hidden":"true"}},[t._v("#")]),t._v(" 死信队列")]),t._v(" "),r("p",[t._v("DLQ(Deal Letter Queue)，死信队列。当一个消息在队列中变成死信之后，他能被重新发送到 DLQ 中，与 DLQ 绑定到队列就是死信队列。")]),t._v(" "),r("h3",{attrs:{id:"什么情况下需要死信队列"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么情况下需要死信队列","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么情况下需要死信队列")]),t._v(" "),r("ul",[r("li",[t._v("消息被拒绝")]),t._v(" "),r("li",[t._v("消息过期")]),t._v(" "),r("li",[t._v("队列达到最大长度")])]),t._v(" "),r("p",[r("img",{attrs:{src:"/funtl/assets1/Lusifer_2019011502260001.png",alt:""}})]),t._v(" "),r("p",[t._v("生产者生产一条消息，存储到普通队列中；设置队列的过期时间为 10 秒，在 10 秒内没有消费者消费消息，那么判定消息过期；此时如果设置了死信队列，过期消息被丢给死信队列交换机，然后被存储在死信队列中。")]),t._v(" "),r("h2",{attrs:{id:"延迟队列"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#延迟队列","aria-hidden":"true"}},[t._v("#")]),t._v(" 延迟队列")]),t._v(" "),r("p",[t._v("顾名思义就是延迟执行消息，比如我们可以增加一个队列并设置其超时时间为 10 秒并且不设置任何消费者，等到消息超时，我们可以将消息放入死信队列，让消费者监听这个死信队列就达到了延迟队列的效果。")]),t._v(" "),r("h2",{attrs:{id:"重试队列"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#重试队列","aria-hidden":"true"}},[t._v("#")]),t._v(" 重试队列")]),t._v(" "),r("p",[t._v("重试的消息在延迟的某个时间点（业务可设置）后，再次投递给消费者。而如果一直这样重复消费都持续失败到一定次数，就会投递到死信队列，最后需要进行人工干预。")])])},[],!1,null,null,null);a.default=s.exports}}]);