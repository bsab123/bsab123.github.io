(window.webpackJsonp=window.webpackJsonp||[]).push([[640],{395:function(a,r,t){"use strict";t.r(r);var i=t(2),_=Object(i.a)({},function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"spring-事务管理简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-事务管理简介","aria-hidden":"true"}},[a._v("#")]),a._v(" Spring 事务管理简介")]),a._v(" "),t("h2",{attrs:{id:"本节视频"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[a._v("#")]),a._v(" 本节视频")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.bilibili.com/video/av25827750",target:"_blank",rel:"noopener noreferrer"}},[a._v("【视频】Spring 的事务管理-Spring 事务管理简介"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),t("p",[a._v("事务原本是数据库中的概念，用于数据访问层。但一般情况下，需要将事务提升到业务层，即 Service 层。这样做是为了能够使用事务的特性来管理具体的业务。")]),a._v(" "),t("p",[a._v("在 Spring 中通常可以通过以下三种方式来实现对事务的管理：")]),a._v(" "),t("ul",[t("li",[a._v("使用 Spring 的事务代理工厂管理事务（已过时）")]),a._v(" "),t("li",[a._v("使用 Spring 的事务注解管理事务")]),a._v(" "),t("li",[a._v("使用 AspectJ 的 AOP 配置管理事务")])]),a._v(" "),t("h2",{attrs:{id:"spring-事务管理-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-事务管理-api","aria-hidden":"true"}},[a._v("#")]),a._v(" Spring 事务管理 API")]),a._v(" "),t("p",[a._v("Spring 的事务管理，主要用到两个事务相关的接口。")]),a._v(" "),t("h3",{attrs:{id:"事务管理器接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务管理器接口","aria-hidden":"true"}},[a._v("#")]),a._v(" 事务管理器接口")]),a._v(" "),t("p",[a._v("事务管理器是 "),t("code",[a._v("PlatformTransactionManager")]),a._v(" 接口对象。其主要用于完成事务的提交、回滚，及获取事务的状态信息。")]),a._v(" "),t("p",[a._v("该接口定义了 3 个事务方法：")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("void commit(TransactionStatus status)")]),a._v("：事务的提交")]),a._v(" "),t("li",[t("code",[a._v("TransactionStatus getTransaction(TransactionDefinition definition)")]),a._v("：获取事务的状态")]),a._v(" "),t("li",[t("code",[a._v("void rollback(TranscationStatus status)")]),a._v("：事务的回滚")])]),a._v(" "),t("h4",{attrs:{id:"常用的两个实现类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用的两个实现类","aria-hidden":"true"}},[a._v("#")]),a._v(" 常用的两个实现类")]),a._v(" "),t("p",[t("code",[a._v("PlatformTransactionManager")]),a._v(" 接口有两个常用的实现类：")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("DataSourceTransactionManager")]),a._v("：使用 JDBC 或 MyBatis 进行持久化数据时使用。")]),a._v(" "),t("li",[t("code",[a._v("HibernateTransactionManager")]),a._v("：使用 Hibernate 进行持久化数据时使用。")])]),a._v(" "),t("h4",{attrs:{id:"spring-的回滚方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-的回滚方式","aria-hidden":"true"}},[a._v("#")]),a._v(" Spring 的回滚方式")]),a._v(" "),t("p",[a._v("Spring 事务的默认回滚方式是：发生运行时异常回滚")]),a._v(" "),t("h3",{attrs:{id:"事务定义接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务定义接口","aria-hidden":"true"}},[a._v("#")]),a._v(" 事务定义接口")]),a._v(" "),t("p",[a._v("事务定义接口 "),t("code",[a._v("TransactionDefinition")]),a._v(" 中定义了事务描述相关的三类常量："),t("strong",[a._v("事务隔离级别")]),a._v("、"),t("strong",[a._v("事务传播行为")]),a._v("、"),t("strong",[a._v("事务默认超时时限")]),a._v("，及对它们的操作。")]),a._v(" "),t("h4",{attrs:{id:"事务的四种隔离级别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务的四种隔离级别","aria-hidden":"true"}},[a._v("#")]),a._v(" 事务的四种隔离级别")]),a._v(" "),t("ul",[t("li",[a._v("DEFAULT：采用 DB 默认的事务隔离级别。MySql 默认为 REPEATABLE_READ；Oracle 默认为：READ_COMMITTED；")]),a._v(" "),t("li",[a._v("READ_UNCOMMITTED：读未提交。未解决任何并发问题。")]),a._v(" "),t("li",[a._v("READ_COMMITTED：读已提交。解决脏读，存在不可重复读与幻读。")]),a._v(" "),t("li",[a._v("REPEATABLE_READ：可重复读。解决脏读、不可重复读。存在幻读。")]),a._v(" "),t("li",[a._v("SERIALIZABLE：串行化。不存在并发问题。")])]),a._v(" "),t("h4",{attrs:{id:"事务的七种传播行为"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务的七种传播行为","aria-hidden":"true"}},[a._v("#")]),a._v(" 事务的七种传播行为")]),a._v(" "),t("p",[a._v("所谓事务传播行为是指，处于不同事务中的方法在相互调用时，执行期间事务的维护情况。如，A 事务中的方法 "),t("code",[a._v("a()")]),a._v(" 调用 B 事务中的方法 "),t("code",[a._v("b()")]),a._v("，在调用执行期间事务的维护情况，就称为事务传播行为。事务传播行为是加在方法上的。")]),a._v(" "),t("ul",[t("li",[a._v("REQUIRED：指定的方法必须在事务内执行。若当前存在事务，就加入到当前事务中；若当前没有事务，则创建一个新事务。这种传播行为是最常见的选择，也是 Spring 默认的事务传播行为。")]),a._v(" "),t("li",[a._v("SUPPORTS：指定的方法支持当前事务，但若当前没有事务，也可以以非事务方式执行。")]),a._v(" "),t("li",[a._v("MANDATORY：指定的方法必须在当前事务内执行，若当前没有事务，则直接抛出异常。")]),a._v(" "),t("li",[a._v("REQUIRES_NEW：总是新建一个事务，若当前存在事务，就将当前事务挂起，直到新事务执行完毕。")]),a._v(" "),t("li",[a._v("NOT_SUPPORTED：指定的方法不能在事务环境中执行，若当前存在事务，就将当前事务挂起。")]),a._v(" "),t("li",[a._v("NEVER：指定的方法不能在事务环境下执行，若当前存在事务，就直接抛出异常。")]),a._v(" "),t("li",[a._v("NESTED：指定的方法必须在事务内执行。若当前存在事务，则在嵌套事务内执行；若当前没有事务，则创建一个新事务。")])])])},[],!1,null,null,null);r.default=_.exports}}]);