(window.webpackJsonp=window.webpackJsonp||[]).push([[660],{374:function(s,a,n){"use strict";n.r(a);var e=n(2),t=Object(e.a)({},function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"jquery-datatables"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jquery-datatables","aria-hidden":"true"}},[s._v("#")]),s._v(" jQuery Datatables")]),s._v(" "),n("p",[s._v("DataTables 是一款 jQuery 表格插件。它是一个高度灵活的工具，可以将任何HTML表格添加高级的交互功能。")]),s._v(" "),n("ul",[n("li",[s._v("中文网站：http://www.datatables.club/")]),s._v(" "),n("li",[s._v("实例索引：http://www.datatables.club/example/")]),s._v(" "),n("li",[s._v("参考手册：http://www.datatables.club/manual/")]),s._v(" "),n("li",[s._v("帮助文档：http://www.datatables.club/reference/")])]),s._v(" "),n("h2",{attrs:{id:"页面引用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#页面引用","aria-hidden":"true"}},[s._v("#")]),s._v(" 页面引用")]),s._v(" "),n("p",[s._v("CSS 部分")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('\x3c!-- DataTables --\x3e\n<link rel="stylesheet" href="/static/assets/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css">\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("JS 部分")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('\x3c!-- DataTables --\x3e\n<script src="/static/assets/bower_components/datatables.net/js/jquery.dataTables.min.js"><\/script>\n<script src="/static/assets/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js"><\/script>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("使用，启用 0 配置模式")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$('#dataTable').DataTable();\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"分页查询案例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分页查询案例","aria-hidden":"true"}},[s._v("#")]),s._v(" 分页查询案例")]),s._v(" "),n("h3",{attrs:{id:"服务端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#服务端","aria-hidden":"true"}},[s._v("#")]),s._v(" 服务端")]),s._v(" "),n("h4",{attrs:{id:"mybatis-映射文件关键代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-映射文件关键代码","aria-hidden":"true"}},[s._v("#")]),s._v(" MyBatis 映射文件关键代码")]),s._v(" "),n("p",[s._v("DataTables 分页需要提供查询数据的总笔数，以下为查询总笔数的关键代码：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<select id="count" resultType="java.lang.Integer">\n  SELECT COUNT(*) FROM tb_user\n</select>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("这里我们使用 MySQL 作为数据库，由于需要传入分页参数，这里我们还使用了 "),n("code",[s._v("Map")]),s._v(" 作为查询参数类型，以下为 MySQL 分页查询的关键代码：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<select id="page" resultType="TbUser" parameterType="java.util.Map">\n    SELECT\n    <include refid="tbUserColumns" />\n    FROM\n    tb_user AS a LIMIT #{page}, #{pageSize}\n</select>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h4",{attrs:{id:"定义数据访问接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义数据访问接口","aria-hidden":"true"}},[s._v("#")]),s._v(" 定义数据访问接口")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/**\n * 分页查询\n * @param params\n * @return\n */\nList<TbUser> page(Map<String, Object> params);\n\n/**\n * 查询笔数\n * @return\n */\nint count();\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h4",{attrs:{id:"定义通用的分页展示对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义通用的分页展示对象","aria-hidden":"true"}},[s._v("#")]),s._v(" 定义通用的分页展示对象")]),s._v(" "),n("p",[s._v("创建一个名为 "),n("code",[s._v("PageInfo")]),s._v(" 的分页数据展示对象，代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("package com.funtl.my.shop.commons.dto;\n\nimport com.funtl.my.shop.commons.persistence.BaseEntity;\n\nimport java.io.Serializable;\nimport java.util.List;\n\n/**\n * 分页展示对象\n * <p>Title: PageInfo</p>\n * <p>Description: </p>\n *\n * @author Lusifer\n * @version 1.0.0\n * @date 2018/6/21 5:17\n */\npublic class PageInfo<T extends BaseEntity> implements Serializable {\n    private int draw;\n    private int recordsTotal;\n    private int recordsFiltered;\n    private List<T> data;\n    private String error;\n\n    public int getDraw() {\n        return draw;\n    }\n\n    public void setDraw(int draw) {\n        this.draw = draw;\n    }\n\n    public int getRecordsTotal() {\n        return recordsTotal;\n    }\n\n    public void setRecordsTotal(int recordsTotal) {\n        this.recordsTotal = recordsTotal;\n    }\n\n    public int getRecordsFiltered() {\n        return recordsFiltered;\n    }\n\n    public void setRecordsFiltered(int recordsFiltered) {\n        this.recordsFiltered = recordsFiltered;\n    }\n\n    public List<T> getData() {\n        return data;\n    }\n\n    public void setData(List<T> data) {\n        this.data = data;\n    }\n\n    public String getError() {\n        return error;\n    }\n\n    public void setError(String error) {\n        this.error = error;\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br")])]),n("h4",{attrs:{id:"业务逻辑层关键代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#业务逻辑层关键代码","aria-hidden":"true"}},[s._v("#")]),s._v(" 业务逻辑层关键代码")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("@Override\npublic PageInfo<TbUser> page(Map<String, Object> params) {\n    PageInfo<TbUser> pageInfo = new PageInfo<>();\n\n    int count = tbUserDao.count();\n    List<TbUser> tbUsers = tbUserDao.page(params);\n\n    pageInfo.setRecordsTotal(count);\n    pageInfo.setRecordsFiltered(count);\n    pageInfo.setData(tbUsers);\n\n    return pageInfo;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h4",{attrs:{id:"控制器层关键代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#控制器层关键代码","aria-hidden":"true"}},[s._v("#")]),s._v(" 控制器层关键代码")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('/**\n * 分页查询\n *\n * @param request\n * @return\n */\n@ResponseBody\n@RequestMapping(value = "page", method = RequestMethod.GET)\npublic PageInfo<TbUser> page(HttpServletRequest request) {\n    String draw = request.getParameter("draw");\n    int start = Integer.parseInt(request.getParameter("start"));\n    int length = Integer.parseInt(request.getParameter("length"));\n\n    Map<String, Object> params = new HashMap<>();\n    params.put("page", start);\n    params.put("pageSize", length);\n\n    PageInfo<TbUser> pageInfo = tbUserService.page(params);\n    pageInfo.setDraw(draw == null ? 0 : Integer.parseInt(draw));\n    return pageInfo;\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h3",{attrs:{id:"客户端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#客户端","aria-hidden":"true"}},[s._v("#")]),s._v(" 客户端")]),s._v(" "),n("p",[s._v("使用 DataTables 分页功能，需要开启一些列的相关配置，分页的数据结果是由 Ajax 请求获取并解析 JSON 格式数据自动封装进表格的，代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('$("#dataTable").DataTable({\n    // 是否开启本地分页\n    "paging": true,\n    // 是否开启本地排序\n    "ordering": false,\n    // 是否显示左下角信息\n    "info": true,\n    // 是否允许用户改变表格每页显示的记录数\n    "lengthChange": false,\n    // 是否显示处理状态(排序的时候，数据很多耗费时间长的话，也会显示这个)\n    "processing": true,\n    // 是否允许 DataTables 开启本地搜索\n    "searching": false,\n    // 是否开启服务器模式\n    "serverSide": true,\n    // 控制 DataTables 的延迟渲染，可以提高初始化的速度\n    "deferRender": true,\n    // 增加或修改通过 Ajax 提交到服务端的请求数据\n    "ajax": {\n        "url": "/user/page"\n    },\n    // 分页按钮显示选项\n    "pagingType": "full_numbers",\n    // 设置列的数据源\n    "columns": [\n        {\n            "data": function (row, type, val, meta) {\n                return \'<input id="\' + row.id + \'" type="checkbox" class="minimal" />\';\n            }\n        },\n        {"data": "id"},\n        {"data": "username"},\n        {"data": "phone"},\n        {"data": "email"},\n        {"data": "updated"},\n        {\n            "data": function (row, type, val, meta) {\n                return \'<a href="#" type="button" class="btn btn-sm btn-default"><i class="fa fa-search"></i> 查看</a>&nbsp;&nbsp;&nbsp;\' +\n                    \'<a href="#" type="button" class="btn btn-sm btn-primary"><i class="fa fa-edit"></i> 编辑</a>&nbsp;&nbsp;&nbsp;\' +\n                    \'<a href="#" type="button" class="btn btn-sm btn-danger"><i class="fa fa-trash-o"></i> 删除</a>\'\n            }\n        }\n    ],\n    // 表格重绘的回调函数\n    "drawCallback": function (settings) {\n        App.initCheckbox();\n    },\n    // 国际化\n    "language": {\n        "sProcessing": "处理中...",\n        "sLengthMenu": "显示 _MENU_ 项结果",\n        "sZeroRecords": "没有匹配结果",\n        "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",\n        "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",\n        "sInfoFiltered": "(由 _MAX_ 项结果过滤)",\n        "sInfoPostFix": "",\n        "sSearch": "搜索:",\n        "sUrl": "",\n        "sEmptyTable": "表中数据为空",\n        "sLoadingRecords": "载入中...",\n        "sInfoThousands": ",",\n        "oPaginate": {\n            "sFirst": "首页",\n            "sPrevious": "上页",\n            "sNext": "下页",\n            "sLast": "末页"\n        },\n        "oAria": {\n            "sSortAscending": ": 以升序排列此列",\n            "sSortDescending": ": 以降序排列此列"\n        }\n    }\n})\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br")])]),n("h3",{attrs:{id:"参考以下文档完成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考以下文档完成","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考以下文档完成")]),s._v(" "),n("ul",[n("li",[s._v("配置选项：http://www.datatables.club/reference/option/")]),s._v(" "),n("li",[s._v("服务器处理：http://www.datatables.club/manual/server-side.html")]),s._v(" "),n("li",[s._v("设置列的数据源：https://datatables.net/reference/option/columns.data")]),s._v(" "),n("li",[s._v("国际化：http://www.datatables.club/manual/i18n.html")])])])},[],!1,null,null,null);a.default=t.exports}}]);