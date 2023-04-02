(window.webpackJsonp=window.webpackJsonp||[]).push([[479],{587:function(a,s,t){"use strict";t.r(s);var n=t(2),e=Object(n.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"spring-boot-整合-tk-mybatis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-整合-tk-mybatis","aria-hidden":"true"}},[a._v("#")]),a._v(" Spring Boot 整合 tk.mybatis")]),a._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),t("p",[a._v("tk.mybatis 是在 MyBatis 框架的基础上提供了很多工具，让开发更加高效")]),a._v(" "),t("h2",{attrs:{id:"引入依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引入依赖","aria-hidden":"true"}},[a._v("#")]),a._v(" 引入依赖")]),a._v(" "),t("p",[a._v("在 "),t("code",[a._v("pom.xml")]),a._v(" 文件中引入 "),t("code",[a._v("mapper-spring-boot-starter")]),a._v(" 依赖，该依赖会自动引入 MyBaits 相关依赖")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("<dependency>\n    <groupId>tk.mybatis</groupId>\n    <artifactId>mapper-spring-boot-starter</artifactId>\n    <version>2.0.2</version>\n</dependency>\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h2",{attrs:{id:"配置-application-yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-application-yml","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置 "),t("code",[a._v("application.yml")])]),a._v(" "),t("p",[a._v("配置 MyBatis")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mybatis:\n    type-aliases-package: 实体类的存放路径，如：com.funtl.hello.spring.boot.entity\n    mapper-locations: classpath:mapper/*.xml\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h2",{attrs:{id:"创建一个通用的父级接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一个通用的父级接口","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建一个通用的父级接口")]),a._v(" "),t("p",[a._v("主要作用是让 DAO 层的接口继承该接口，以达到使用 tk.mybatis 的目的")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("package com.funtl.utils;\n\nimport tk.mybatis.mapper.common.Mapper;\nimport tk.mybatis.mapper.common.MySqlMapper;\n\n/**\n * 自己的 Mapper\n * 特别注意，该接口不能被扫描到，否则会出错\n * <p>Title: MyMapper</p>\n * <p>Description: </p>\n *\n * @author Lusifer\n * @version 1.0.0\n * @date 2018/5/29 0:57\n */\npublic interface MyMapper<T> extends Mapper<T>, MySqlMapper<T> {\n}\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br")])]),t("p",[t("strong",[a._v("PS：")]),a._v(" 具体使用方法在 "),t("code",[a._v("测试 MyBatis 操作数据库")]),a._v(" 章节中进行介绍，本章节仅为准备环节。")])])},[],!1,null,null,null);s.default=e.exports}}]);