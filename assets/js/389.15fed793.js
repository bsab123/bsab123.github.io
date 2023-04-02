(window.webpackJsonp=window.webpackJsonp||[]).push([[389],{224:function(a,t,s){"use strict";s.r(t);var e=s(2),r=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"说说最终一致性的实现方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说说最终一致性的实现方案","aria-hidden":"true"}},[a._v("#")]),a._v(" 说说最终一致性的实现方案")]),a._v(" "),s("h2",{attrs:{id:"问题的起源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题的起源","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题的起源")]),a._v(" "),s("p",[a._v("在电商等业务中，系统一般由多个独立的服务组成，如何解决分布式调用时候数据的一致性？")]),a._v(" "),s("p",[a._v("具体业务场景如下，比如一个业务操作，如果同时调用服务 A、B、C，需要满足要么同时成功；要么同时失败。A、B、C 可能是多个不同部门开发、部署在不同服务器上的远程服务。")]),a._v(" "),s("p",[a._v("在分布式系统来说，如果不想牺牲一致性，CAP 理论告诉我们只能放弃可用性，这显然不能接受。为了便于讨论问题，先简单介绍下数据一致性的基础理论。")]),a._v(" "),s("h3",{attrs:{id:"强一致"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强一致","aria-hidden":"true"}},[a._v("#")]),a._v(" 强一致")]),a._v(" "),s("p",[a._v("当更新操作完成之后，任何多个后续进程或者线程的访问都会返回最新的更新过的值。这种是对用户最友好的，就是用户上一次写什么，下一次就保证能读到什么。根据 CAP 理论，这种实现需要牺牲可用性。")]),a._v(" "),s("h3",{attrs:{id:"弱一致性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#弱一致性","aria-hidden":"true"}},[a._v("#")]),a._v(" 弱一致性")]),a._v(" "),s("p",[a._v("系统并不保证续进程或者线程的访问都会返回最新的更新过的值。系统在数据写入成功之后，不承诺立即可以读到最新写入的值，也不会具体的承诺多久之后可以读到。")]),a._v(" "),s("h3",{attrs:{id:"最终一致性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最终一致性","aria-hidden":"true"}},[a._v("#")]),a._v(" 最终一致性")]),a._v(" "),s("p",[a._v("弱一致性的特定形式。系统保证在没有后续更新的前提下，系统最终返回上一次更新操作的值。在没有故障发生的前提下，不一致窗口的时间主要受通信延迟，系统负载和复制副本的个数影响。DNS 是一个典型的最终一致性系统。")]),a._v(" "),s("p",[a._v("在工程实践上，为了保障系统的可用性，互联网系统大多将强一致性需求转换成最终一致性的需求，并通过系统执行幂等性的保证，保证数据的最终一致性。但在电商等场景中，对于数据一致性的解决方法和常见的互联网系统（如 MySQL 主从同步）又有一定区别，群友的讨论分成以下 6 种解决方案。")]),a._v(" "),s("h2",{attrs:{id:"_1-规避分布式事务——业务整合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-规避分布式事务——业务整合","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 规避分布式事务——业务整合")]),a._v(" "),s("p",[a._v("业务整合方案主要采用将接口整合到本地执行的方法。拿问题场景来说，则可以将服务 A、B、C 整合为一个服务 D 给业务，这个服务 D 再通过转换为本地事务的方式，比如服务 D 包含本地服务和服务 E，而服务 E 是本地服务 A ~ C 的整合。")]),a._v(" "),s("p",[a._v("优点：解决（规避）了分布式事务。")]),a._v(" "),s("p",[a._v("缺点：显而易见，把本来规划拆分好的业务，又耦合到了一起，业务职责不清晰，不利于维护。")]),a._v(" "),s("p",[a._v("由于这个方法存在明显缺点，"),s("strong",[a._v("通常不建议使用")]),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"_2-经典方案-ebay-模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-经典方案-ebay-模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 经典方案 - eBay 模式")]),a._v(" "),s("p",[a._v("此方案的核心是将需要分布式处理的任务通过消息日志的方式来异步执行。消息日志可以存储到本地文本、数据库或消息队列，再通过业务规则自动或人工发起重试。人工重试更多的是应用于支付场景，通过对账系统对事后问题的处理。")]),a._v(" "),s("p",[s("strong",[a._v("消息日志方案的核心是保证服务接口的幂等性。")])]),a._v(" "),s("p",[a._v("考虑到网络通讯失败、数据丢包等原因，如果接口不能保证幂等性，数据的唯一性将很难保证。")]),a._v(" "),s("p",[a._v("eBay 方式的主要思路如下。")]),a._v(" "),s("h3",{attrs:{id:"base：一种-acid-的替代方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#base：一种-acid-的替代方案","aria-hidden":"true"}},[a._v("#")]),a._v(" BASE：一种 ACID 的替代方案")]),a._v(" "),s("p",[a._v("此方案是 eBay 的架构师 Dan Pritchett 在 2008 年发表给 ACM 的文章，是一篇解释 BASE 原则，或者说最终一致性的经典文章。文中讨论了 BASE 与 ACID 原则在保证数据一致性的基本差异。")]),a._v(" "),s("p",[a._v("如果 ACID 为分区的数据库提供一致性的选择，那么如何实现可用性呢？")]),a._v(" "),s("h3",{attrs:{id:"base-basically-available-soft-state-eventually-consistent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#base-basically-available-soft-state-eventually-consistent","aria-hidden":"true"}},[a._v("#")]),a._v(" BASE (basically available, soft state, eventually consistent)")]),a._v(" "),s("p",[a._v("BASE 的可用性是通过 "),s("strong",[a._v("支持局部故障")]),a._v(" 而不是系统全局故障来实现的。下面是一个简单的例子：如果将用户分区在 5 个数据库服务器上，BASE 设计鼓励类似的处理方式，一个用户数据库的故障只影响这台特定主机那 20% 的用户。这里不涉及任何魔法，不过它确实可以带来更高的可感知的系统可用性。")]),a._v(" "),s("p",[a._v("文章中描述了一个最常见的场景，如果产生了一笔交易，需要在交易表增加记录，同时还要修改用户表的金额。这两个表属于不同的远程服务，所以就涉及到分布式事务一致性的问题")]),a._v(" "),s("p",[s("img",{attrs:{src:"/funtl/assets/006kbv1Jgw1f31xaggg0bj30cq09mq3h.jpg",alt:""}})]),a._v(" "),s("p",[a._v("文中提出了一个经典的解决方法，将主要修改操作以及更新用户表的消息放在 "),s("strong",[a._v("一个本地事务")]),a._v(" 来完成。同时为了避免重复消费用户表消息带来的问题，达到多次重试的幂等性，"),s("strong",[a._v("增加一个更新记录表 updates_applied")]),a._v(" 来记录已经处理过的消息。")]),a._v(" "),s("p",[s("img",{attrs:{src:"/funtl/assets/006kbv1Jgw1f31xaq6ex2j30ct082wev.jpg",alt:""}})]),a._v(" "),s("p",[a._v("系统的执行伪代码如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('Begin transaction\n\tInsert into transaction(id, selller_id, buyer_id, amount);\n\tQueue message "update user(\'seller\', selller_id, amount)";\n\tQueue message "update user(\'buyer\', buyer_id, amount)";\nEnd transaction\n\nFor each message in queue\n\tPeek message\n\tBegin transaction\n\t\tSelect count(*) as processed where trans_id = message.trans_id\n\t\t\tand balance = message.balance and user_id = message.user_id\n\t\tif processed == 0\n\t\t\tif message.balance == "seller"\n\t\t\t\tUpdate user set amt_sold = amt_sold + message.amount\n\t\t\t\t\twhere id = message.id;\n\t\t\n\t\t\tElse\n\t\t\t\tUpdate user set amt_bought = amt_bought + message.amount\n\t\t\t\t\twhere id = message.id\n\t\t\n\t\t\tEnd if\n\t\t\n\t\tInsert int updates_applied\n\t\t\t(message.trans_id, message.balance, message.user_id);\n\t\tEnd if\n\tEnd transaction\n\t\n\tif transaction successful\n\t\tRemove message from queue\n\tEnd if\nEnd for\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br")])]),s("p",[a._v("基于以上方法，在第一阶段，通过本地的数据库的事务保障，增加了 transaction 表及消息队列 。")]),a._v(" "),s("p",[a._v("在第二阶段，分别读出消息队列（但不删除），通过判断更新记录表 updates_applied 来检测相关记录是否被执行，未被执行的记录会修改 user 表，然后增加一条操作记录到 updates_applied，事务执行成功之后再删除队列。")]),a._v(" "),s("p",[a._v("通过以上方法，达到了分布式系统的最终一致性。进一步了解 eBay 的方案可以参考文末链接。")]),a._v(" "),s("h2",{attrs:{id:"_3-去哪儿网分布式事务方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-去哪儿网分布式事务方案","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. 去哪儿网分布式事务方案")]),a._v(" "),s("p",[a._v("随着业务规模不断地扩大，电商网站一般都要面临拆分之路。就是将原来一个单体应用拆分成多个不同职责的子系统。比如以前可能将面向用户、客户和运营的功能都放在一个系统里，现在拆分为订单中心、代理商管理、运营系统、报价中心、库存管理等多个子系统。")]),a._v(" "),s("p",[s("strong",[a._v("拆分首先要面临的是什么呢？")])]),a._v(" "),s("p",[a._v("最开始的单体应用所有功能都在一起，存储也在一起。比如运营要取消某个订单，那直接去更新订单表状态，然后更新库存表就 ok 了。因为是单体应用，库在一起，这些都可以在一个事务里，由关系数据库来保证一致性。")]),a._v(" "),s("p",[a._v("但拆分之后就不同了，不同的子系统都有自己的存储。比如订单中心就只管理自己的订单库，而库存管理也有自己的库。那么运营系统取消订单的时候就是通过接口调用等方式来调用订单中心和库存管理的服务了，而不是直接去操作库。这就涉及一个『分布式事务』的问题。")]),a._v(" "),s("p",[a._v("分布式事务有两种解决方式")]),a._v(" "),s("h3",{attrs:{id:"优先使用异步消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优先使用异步消息","aria-hidden":"true"}},[a._v("#")]),a._v(" 优先使用异步消息")]),a._v(" "),s("p",[a._v("上文已经说过，使用异步消息 Consumer 端需要实现幂等。")]),a._v(" "),s("p",[a._v("幂等有两种方式，"),s("strong",[a._v("一种方式是业务逻辑保证幂等")]),a._v("。比如接到支付成功的消息订单状态变成支付完成，如果当前状态是支付完成，则再收到一个支付成功的消息则说明消息重复了，直接作为消息成功处理。")]),a._v(" "),s("p",[s("strong",[a._v("另外一种方式如果业务逻辑无法保证幂等，则要增加一个去重表或者类似的实现")]),a._v("。对于 producer 端在业务数据库的同实例上放一个消息库，发消息和业务操作在同一个本地事务里。发消息的时候消息并不立即发出，而是向消息库插入一条消息记录，然后在事务提交的时候再异步将消息发出，发送消息如果成功则将消息库里的消息删除，如果遇到消息队列服务异常或网络问题，消息没有成功发出那么消息就留在这里了，会有另外一个服务不断地将这些消息扫出重新发送。")]),a._v(" "),s("h3",{attrs:{id:"有的业务不适合异步消息的方式，事务的各个参与方都需要同步的得到结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有的业务不适合异步消息的方式，事务的各个参与方都需要同步的得到结果","aria-hidden":"true"}},[a._v("#")]),a._v(" 有的业务不适合异步消息的方式，事务的各个参与方都需要同步的得到结果")]),a._v(" "),s("p",[a._v("这种情况的实现方式其实和上面类似，每个参与方的本地业务库的同实例上面放一个事务记录库。")]),a._v(" "),s("p",[a._v("比如 A 同步调用 B，C。A 本地事务成功的时候更新本地事务记录状态，B 和 C 同样。如果有一次 A 调用 B 失败了，这个失败可能是 B 真的失败了，也可能是调用超时，实际 B 成功。则由一个中心服务对比三方的事务记录表，做一个最终决定。假设现在三方的事务记录是 A 成功，B 失败，C 成功。那么最终决定有两种方式，根据具体场景：")]),a._v(" "),s("ul",[s("li",[a._v("重试 B，直到 B 成功，事务记录表里记录了各项调用参数等信息；")]),a._v(" "),s("li",[a._v("执行 A 和 B 的补偿操作(一种可行的补偿方式是回滚)。")])]),a._v(" "),s("p",[a._v("对 b 场景做一个特殊说明：比如 B 是扣库存服务，在第一次调用的时候因为某种原因失败了，但是重试的时候库存已经变为 0，无法重试成功，这个时候只有回滚 A 和 C 了。")]),a._v(" "),s("p",[a._v("那么可能有人觉得在业务库的同实例里放消息库或事务记录库，会对业务侵入，业务还要关心这个库，是否一个合理的设计？")]),a._v(" "),s("p",[a._v("实际上可以依靠运维的手段来简化开发的侵入，我们的方法是让 DBA 在公司所有 MySQL 实例上预初始化这个库，通过框架层（消息的客户端或事务 RPC 框架）透明的在背后操作这个库，业务开发人员只需要关心自己的业务逻辑，不需要直接访问这个库。")]),a._v(" "),s("p",[a._v("总结起来，其实两种方式的根本原理是类似的，也就是"),s("strong",[a._v("将分布式事务转换为多个本地事务，然后依靠重试等方式达到最终一致性。")])]),a._v(" "),s("h2",{attrs:{id:"_4-蘑菇街交易创建过程中的分布式一致性方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-蘑菇街交易创建过程中的分布式一致性方案","aria-hidden":"true"}},[a._v("#")]),a._v(" 4. 蘑菇街交易创建过程中的分布式一致性方案")]),a._v(" "),s("h3",{attrs:{id:"交易创建的一般性流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#交易创建的一般性流程","aria-hidden":"true"}},[a._v("#")]),a._v(" 交易创建的一般性流程")]),a._v(" "),s("p",[a._v("我们把交易创建流程抽象出一系列可扩展的功能点，每个功能点都可以有多个实现（具体的实现之间有组合/互斥关系）。把各个功能点按照一定流程串起来，就完成了交易创建的过程。")]),a._v(" "),s("p",[s("img",{attrs:{src:"/funtl/assets/006kbv1Jgw1f31xdryziuj30i008d0tu.jpg",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"面临的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面临的问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 面临的问题")]),a._v(" "),s("p",[a._v("每个功能点的实现都可能会依赖外部服务。那么如何保证各个服务之间的数据是一致的呢？比如锁定优惠券服务调用超时了，不能确定到底有没有锁券成功，该如何处理？再比如锁券成功了，但是扣减库存失败了，该如何处理？")]),a._v(" "),s("h3",{attrs:{id:"方案选型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案选型","aria-hidden":"true"}},[a._v("#")]),a._v(" 方案选型")]),a._v(" "),s("p",[a._v("服务依赖过多，会带来管理复杂性增加和稳定性风险增大的问题。试想如果我们强依赖 10 个服务，9 个都执行成功了，最后一个执行失败了，那么是不是前面 9 个都要回滚掉？这个成本还是非常高的。")]),a._v(" "),s("p",[a._v("所以在拆分大的流程为多个小的本地事务的前提下，对于非实时、非强一致性的关联业务写入，在本地事务执行成功后，我们选择发消息通知、关联事务异步化执行的方案。")]),a._v(" "),s("p",[s("strong",[a._v("消息通知往往不能保证 100% 成功；且消息通知后，接收方业务是否能执行成功还是未知数。前者问题可以通过重试解决；后者可以选用事务消息来保证。")])]),a._v(" "),s("p",[a._v("但是事务消息框架本身会给业务代码带来侵入性和复杂性，所以我们选择"),s("strong",[a._v("基于 DB 事件变化通知到 MQ 的方式")]),a._v("做系统间解耦，通过订阅方消费 MQ 消息时的 ACK 机制，保证消息一定消费成功，达到最终一致性。由于消息可能会被重发，消息订阅方业务逻辑处理要做好幂等保证。")]),a._v(" "),s("p",[a._v("所以目前只剩下需要实时同步做、有强一致性要求的业务场景了。在交易创建过程中，锁券和扣减库存是这样的两个典型场景。")]),a._v(" "),s("p",[a._v("要保证多个系统间数据一致，乍一看，必须要引入分布式事务框架才能解决。但引入非常重的类似二阶段提交分布式事务框架会带来复杂性的急剧上升；在电商领域，绝对的强一致是过于理想化的，我们可以选择准实时的最终一致性。")]),a._v(" "),s("p",[a._v("我们在交易创建流程中，"),s("strong",[a._v("首先创建一个不可见订单")]),a._v("，然后在同步调用锁券和扣减库存时，针对调用异常（失败或者超时），发出废单消息到MQ。如果消息发送失败，本地会做时间阶梯式的异步重试；优惠券系统和库存系统收到消息后，会进行判断是否需要做业务回滚，这样就准实时地保证了多个本地事务的最终一致性。")]),a._v(" "),s("p",[s("img",{attrs:{src:"/funtl/assets/006kbv1Jgw1f31xeajfqkj30680i2wez.jpg",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"_5-支付宝及蚂蚁金融云的分布式服务-dts-方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-支付宝及蚂蚁金融云的分布式服务-dts-方案","aria-hidden":"true"}},[a._v("#")]),a._v(" 5. 支付宝及蚂蚁金融云的分布式服务 DTS 方案")]),a._v(" "),s("p",[a._v("业界常用的还有支付宝的一种 xts 方案，由支付宝在 2PC 的基础上改进而来。主要思路如下，大部分信息引用自官方网站。")]),a._v(" "),s("h3",{attrs:{id:"分布式事务服务简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务服务简介","aria-hidden":"true"}},[a._v("#")]),a._v(" 分布式事务服务简介")]),a._v(" "),s("p",[a._v("分布式事务服务 (Distributed Transaction Service, DTS) 是一个分布式事务框架，用来保障在大规模分布式环境下事务的最终一致性。DTS 从架构上分为 xts-client 和 xts-server 两部分，前者是一个嵌入客户端应用的 JAR 包，主要负责事务数据的写入和处理；后者是一个独立的系统，主要负责异常事务的恢复。")]),a._v(" "),s("h3",{attrs:{id:"核心特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心特性","aria-hidden":"true"}},[a._v("#")]),a._v(" 核心特性")]),a._v(" "),s("p",[a._v("传统关系型数据库的事务模型必须遵守 ACID 原则。在单数据库模式下，ACID 模型能有效保障数据的完整性，但是在大规模分布式环境下，一个业务往往会跨越多个数据库，如何保证这多个数据库之间的数据一致性，需要其他行之有效的策略。在 JavaEE 规范中使用 2PC (2 Phase Commit, 两阶段提交) 来处理跨 DB 环境下的事务问题，但是 2PC 是反可伸缩模式，也就是说，在事务处理过程中，参与者需要一直持有资源直到整个分布式事务结束。这样，当业务规模达到千万级以上时，2PC 的局限性就越来越明显，系统可伸缩性会变得很差。基于此，我们采用 BASE 的思想实现了一套类似 2PC 的分布式事务方案，这就是 DTS。DTS在充分保障分布式环境下高可用性、高可靠性的同时兼顾数据一致性的要求，其最大的特点是保证数据最终一致 (Eventually consistent)。")]),a._v(" "),s("p",[a._v("简单的说，DTS 框架有如下特性：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("最终一致：事务处理过程中，会有短暂不一致的情况，但通过恢复系统，可以让事务的数据达到最终一致的目标。")])]),a._v(" "),s("li",[s("p",[a._v("协议简单：DTS 定义了类似 2PC 的标准两阶段接口，业务系统只需要实现对应的接口就可以使用 DTS 的事务功能。")])]),a._v(" "),s("li",[s("p",[a._v("与 RPC 服务协议无关：在 SOA 架构下，一个或多个 DB 操作往往被包装成一个一个的 Service，Service 与 Service 之间通过 RPC 协议通信。DTS 框架构建在 SOA 架构上，与底层协议无关。")])]),a._v(" "),s("li",[s("p",[a._v("与底层事务实现无关： DTS 是一个抽象的基于 Service 层的概念，与底层事务实现无关，也就是说在 DTS 的范围内，无论是关系型数据库 MySQL，Oracle，还是 KV 存储 MemCache，或者列存数据库 HBase，只要将对其的操作包装成 DTS 的参与者，就可以接入到 DTS 事务范围内。")])])]),a._v(" "),s("p",[a._v("以下是分布式事务框架的流程图")]),a._v(" "),s("p",[s("img",{attrs:{src:"/funtl/assets/006kbv1Jgw1f31xfuizhpj30a70b7q3x.jpg",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现","aria-hidden":"true"}},[a._v("#")]),a._v(" 实现")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("一个完整的业务活动由一个主业务服务与若干从业务服务组成。")])]),a._v(" "),s("li",[s("p",[a._v("主业务服务负责发起并完成整个业务活动。")])]),a._v(" "),s("li",[s("p",[a._v("从业务服务提供 TCC 型业务操作。")])]),a._v(" "),s("li",[s("p",[a._v("业务活动管理器控制业务活动的一致性，它登记业务活动中的操作，并在活动提交时确认所有的两阶段事务的 confirm 操作，在业务活动取消时调用所有两阶段事务的 cancel 操作。”")])])]),a._v(" "),s("h3",{attrs:{id:"与-2pc-协议比较"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与-2pc-协议比较","aria-hidden":"true"}},[a._v("#")]),a._v(" 与 2PC 协议比较")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("没有单独的 Prepare 阶段，降低协议成本")])]),a._v(" "),s("li",[s("p",[a._v("系统故障容忍度高，恢复简单")])])]),a._v(" "),s("h2",{attrs:{id:"_6-农信网数据一致性方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-农信网数据一致性方案","aria-hidden":"true"}},[a._v("#")]),a._v(" 6. 农信网数据一致性方案")]),a._v(" "),s("h3",{attrs:{id:"电商业务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#电商业务","aria-hidden":"true"}},[a._v("#")]),a._v(" 电商业务")]),a._v(" "),s("p",[a._v("公司的支付部门，通过接入其它第三方支付系统来提供支付服务给业务部门，支付服务是一个基于 Dubbo 的 RPC 服务。")]),a._v(" "),s("p",[a._v("对于业务部门来说，电商部门的订单支付，需要调用")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("支付平台的支付接口来处理订单；")])]),a._v(" "),s("li",[s("p",[a._v("同时需要调用积分中心的接口，按照业务规则，给用户增加积分。")])])]),a._v(" "),s("p",[a._v("从业务规则上需要同时保证业务数据的实时性和一致性，也就是支付成功必须加积分。")]),a._v(" "),s("p",[a._v("我们采用的方式是同步调用，首先处理本地事务业务。考虑到积分业务比较单一且业务影响低于支付，由积分平台提供增加与回撤接口。")]),a._v(" "),s("p",[a._v("具体的流程是先调用积分平台增加用户积分，再调用支付平台进行支付处理，如果处理失败，catch 方法调用积分平台的回撤方法，将本次处理的积分订单回撤。")]),a._v(" "),s("p",[s("img",{attrs:{src:"/funtl/assets/006kbv1Jgw1f31xgmb4wrj30hl09rgmn.jpg",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"用户信息变更"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户信息变更","aria-hidden":"true"}},[a._v("#")]),a._v(" 用户信息变更")]),a._v(" "),s("p",[a._v("公司的用户信息，统一由用户中心维护，而用户信息的变更需要同步给各业务子系统，业务子系统再根据变更内容，处理各自业务。用户中心作为 MQ 的 producer，添加通知给 MQ。APP Server 订阅该消息，同步本地数据信息，再处理相关业务比如 APP 退出下线等。")]),a._v(" "),s("p",[a._v("我们采用异步消息通知机制，目前主要使用 ActiveMQ，基于 Virtual Topic 的订阅方式，保证单个业务集群订阅的单次消费。")]),a._v(" "),s("p",[s("img",{attrs:{src:"/funtl/assets/006kbv1Jgw1f31xhl94fyj30hu08qt9j.jpg",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),s("p",[a._v("分布式服务对衍生的配套系统要求比较多，特别是我们基于消息、日志的最终一致性方案，需要考虑消息的积压、消费情况、监控、报警等。")])])},[],!1,null,null,null);t.default=r.exports}}]);