(window.webpackJsonp=window.webpackJsonp||[]).push([[376],{731:function(e,s,a){"use strict";a.r(s);var r=a(2),t=Object(r.a)({},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"说说-sql-优化之道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说说-sql-优化之道","aria-hidden":"true"}},[e._v("#")]),e._v(" 说说 SQL 优化之道")]),e._v(" "),a("h2",{attrs:{id:"一些常见的-sql-实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一些常见的-sql-实践","aria-hidden":"true"}},[e._v("#")]),e._v(" 一些常见的 SQL 实践")]),e._v(" "),a("ul",[a("li",[e._v("负向条件查询不能使用索引")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select from order where status!=0 and status!=1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("not in/not exists # 都不是好习惯\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("可以优化为 "),a("code",[e._v("in")]),e._v(" 查询：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select from order where status in(2,3)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[e._v("前导模糊查询不能使用索引")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select from order where desc like '%XX'\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("而非前导模糊查询则可以：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select from order where desc like 'XX%'\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[e._v("数据区分度不大的字段不宜使用索引")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select from user where sex=1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("原因：性别只有男，女，每次过滤掉的数据很少，不宜使用索引。")]),e._v(" "),a("p",[e._v("经验上，能过滤80%数据时就可以使用索引。对于订单状态，如果状态值很少，不宜使用索引，如果状态值很多，能够过滤大量数据，则应该建立索引。")]),e._v(" "),a("ul",[a("li",[e._v("在属性上进行计算不能命中索引")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select from order where YEAR(date) < = '2017'\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("即使date上建立了索引，也会全表扫描，可优化为值计算：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select from order where date < = CURDATE()\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("或者：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select from order where date < = '2017-01-01'\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"并非周知的-sql-实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并非周知的-sql-实践","aria-hidden":"true"}},[e._v("#")]),e._v(" 并非周知的 SQL 实践")]),e._v(" "),a("ul",[a("li",[e._v("如果业务大部分是单条查询，使用Hash索引性能更好，例如用户中心")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select from user where uid=?\nselect from user where login_name=?\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("原因："),a("code",[e._v("B-Tree")]),e._v(" 索引的时间复杂度是 "),a("code",[e._v("O(log(n))")]),e._v("；"),a("code",[e._v("Hash")]),e._v(" 索引的时间复杂度是 "),a("code",[e._v("O(1)")])]),e._v(" "),a("ul",[a("li",[e._v("允许为 "),a("code",[e._v("null")]),e._v(" 的列，查询有潜在大坑")])]),e._v(" "),a("p",[e._v("单列索引不存 "),a("code",[e._v("null")]),e._v(" 值，复合索引不存全为 "),a("code",[e._v("null")]),e._v(" 的值，如果列允许为 "),a("code",[e._v("null")]),e._v("，可能会得到“不符合预期”的结果集")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select from user where name != 'shenjian'\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("如果 "),a("code",[e._v("name")]),e._v(" 允许为 "),a("code",[e._v("null")]),e._v("，索引不存储 "),a("code",[e._v("null")]),e._v(" 值，结果集中不会包含这些记录。所以，请使用 "),a("code",[e._v("not null")]),e._v(" 约束以及默认值。")]),e._v(" "),a("ul",[a("li",[e._v("复合索引最左前缀，并不是值 SQL 语句的 "),a("code",[e._v("where")]),e._v(" 顺序要和复合索引一致")])]),e._v(" "),a("p",[e._v("用户中心建立了(login_name, passwd)的复合索引")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select from user where login_name=? and passwd=?\nselect from user where passwd=? and login_name=?\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("都能够命中索引")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select from user where login_name=?\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("也能命中索引，满足复合索引最左前缀")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select from user where passwd=?\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("不能命中索引，不满足复合索引最左前缀")]),e._v(" "),a("ul",[a("li",[e._v("使用 "),a("code",[e._v("ENUM")]),e._v(" 而不是字符串")])]),e._v(" "),a("p",[a("code",[e._v("ENUM")]),e._v(" 保存的是 "),a("code",[e._v("TINYINT")]),e._v("，别在枚举中搞一些“中国”“北京”“技术部”这样的字符串，字符串空间又大，效率又低。")]),e._v(" "),a("h2",{attrs:{id:"小众但有用的-sql-实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小众但有用的-sql-实践","aria-hidden":"true"}},[e._v("#")]),e._v(" 小众但有用的 SQL 实践")]),e._v(" "),a("ul",[a("li",[e._v("如果明确知道只有一条结果返回，"),a("code",[e._v("limit 1")]),e._v(" 能够提高效率")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select from user where login_name=?\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("可以优化为：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select from user where login_name=? limit 1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("原因：你知道只有一条结果，但数据库并不知道，明确告诉它，让它主动停止游标移动")]),e._v(" "),a("ul",[a("li",[e._v("把计算放到业务层而不是数据库层，除了节省数据的 CPU，还有意想不到的查询缓存优化效果")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select from order where date < = CURDATE()\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("这不是一个好的SQL实践，应该优化为：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$curDate = date('Y-m-d');\n$res = mysqlquery('select from order where date < = $curDate');\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("原因：释放了数据库的 CPU，多次调用，传入的SQL相同，才可以利用查询缓存")]),e._v(" "),a("ul",[a("li",[e._v("强制类型转换会全表扫描")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select from user where phone=13800001234\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("你以为会命中 phone 索引么？大错特错了，这个语句究竟要怎么改？")]),e._v(" "),a("p",[e._v("末了，再加一条，不要使用 "),a("code",[e._v("select *（潜台词，文章的 SQL 都不合格 ==）")]),e._v("，只返回需要的列，能够大大的节省数据传输量，与数据库的内存使用量哟。")])])},[],!1,null,null,null);s.default=t.exports}}]);