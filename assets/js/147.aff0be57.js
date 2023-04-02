(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{660:function(e,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"docker-守护态运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-守护态运行","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker 守护态运行")]),e._v(" "),a("p",[e._v("更多的时候，需要让 Docker 在后台运行而不是直接把执行命令的结果输出在当前宿主机下。此时，可以通过添加 "),a("code",[e._v("-d")]),e._v(" 参数来实现。")]),e._v(" "),a("p",[e._v("下面举两个例子来说明一下。")]),e._v(" "),a("p",[e._v("如果不使用 "),a("code",[e._v("-d")]),e._v(" 参数运行容器。")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ docker run ubuntu:17.10 /bin/sh -c "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"while true; do echo hello world; sleep 1; done"')]),e._v("\nhello world\nhello world\nhello world\nhello world\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("容器会把输出的结果 (STDOUT) 打印到宿主机上面")]),e._v(" "),a("p",[e._v("如果使用了 "),a("code",[e._v("-d")]),e._v(" 参数运行容器。")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ docker run -d ubuntu:17.10 /bin/sh -c "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"while true; do echo hello world; sleep 1; done"')]),e._v("\n77b2dc01fe0f3f1265df143181e7b9af5e05279a884f4776ee75350ea9d8017a\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("此时容器会在后台运行并不会把输出的结果 (STDOUT) 打印到宿主机上面(输出结果可以用 "),a("code",[e._v("docker logs")]),e._v(" 查看)。")]),e._v(" "),a("p",[a("strong",[e._v("注：")]),e._v(" 容器是否会长久运行，是和 "),a("code",[e._v("docker run")]),e._v(" 指定的命令有关，和 "),a("code",[e._v("-d")]),e._v(" 参数无关。")]),e._v(" "),a("p",[e._v("使用 "),a("code",[e._v("-d")]),e._v(" 参数启动后会返回一个唯一的 id，也可以通过 "),a("code",[e._v("docker container ls")]),e._v(" 命令来查看容器信息。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ docker container ls\nCONTAINER ID  IMAGE         COMMAND               CREATED        STATUS       PORTS NAMES\n77b2dc01fe0f  ubuntu:17.10  /bin/sh -c 'while tr  2 minutes ago  Up 1 minute        agitated_wright\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("要获取容器的输出信息，可以通过 "),a("code",[e._v("docker container logs")]),e._v(" 命令。")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ docker container logs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("container ID or NAMES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\nhello world\nhello world\nhello world\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v(".")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v(".")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v(".")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])])])},[],!1,null,null,null);s.default=r.exports}}]);