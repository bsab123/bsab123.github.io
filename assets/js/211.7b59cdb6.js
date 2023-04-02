(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{280:function(e,s,a){"use strict";a.r(s);var t=a(2),r=Object(t.a)({},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"gitflow-工作流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitflow-工作流","aria-hidden":"true"}},[e._v("#")]),e._v(" GitFlow 工作流")]),e._v(" "),a("h2",{attrs:{id:"本节视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[e._v("#")]),e._v(" 本节视频")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.bilibili.com/video/av32573821/",target:"_blank",rel:"noopener noreferrer"}},[e._v("【视频】Git工作流指南-GitFlow工作流"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),a("p",[a("img",{attrs:{src:"/funtl/assets/git-workflows-gitflow.png",alt:""}})]),e._v(" "),a("p",[e._v("GitFlow 工作流定义了一个围绕项目发布的严格分支模型。虽然比功能分支工作流复杂几分，但提供了用于一个健壮的用于管理大型项目的框架。")]),e._v(" "),a("p",[e._v("GitFlow 工作流没有用超出功能分支工作流的概念和命令，而是为不同的分支分配一个很明确的角色，并定义分支之间如何和什么时候进行交互。除了使用功能分支，在做准备、维护和记录发布也使用各自的分支。当然你可以用上功能分支工作流所有的好处：Pull Requests、隔离实验性开发和更高效的协作。")]),e._v(" "),a("h2",{attrs:{id:"工作方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作方式","aria-hidden":"true"}},[e._v("#")]),e._v(" 工作方式")]),e._v(" "),a("p",[e._v("GitFlow 工作流仍然用中央仓库作为所有开发者的交互中心。和其它的工作流一样，开发者在本地工作并 push 分支到中央仓库中。")]),e._v(" "),a("h3",{attrs:{id:"历史分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#历史分支","aria-hidden":"true"}},[e._v("#")]),e._v(" 历史分支")]),e._v(" "),a("p",[e._v("相对使用仅有的一个 master 分支，GitFlow 工作流使用2个分支来记录项目的历史。master 分支存储了正式发布的历史，而 develop 分支作为功能的集成分支。这样也方便 master 分支上的所有提交分配一个版本号。")]),e._v(" "),a("p",[a("img",{attrs:{src:"/funtl/assets/git-workflow-release-cycle-1historical.png",alt:""}})]),e._v(" "),a("p",[e._v("剩下要说明的问题围绕着这2个分支的区别展开。")]),e._v(" "),a("h3",{attrs:{id:"功能分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能分支","aria-hidden":"true"}},[e._v("#")]),e._v(" 功能分支")]),e._v(" "),a("p",[e._v("每个新功能位于一个自己的分支，这样可以 push 到中央仓库以备份和协作。但功能分支不是从 master 分支上拉出新分支，而是使用 develop 分支作为父分支。当新功能完成时，合并回 develop 分支。新功能提交应该从不直接与 master 分支交互。")]),e._v(" "),a("p",[a("img",{attrs:{src:"/funtl/assets/git-workflow-release-cycle-2feature.png",alt:""}})]),e._v(" "),a("p",[e._v("注意，从各种含义和目的上来看，功能分支加上 develop 分支就是功能分支工作流的用法。但 GitFlow 工作流没有在这里止步。")]),e._v(" "),a("h3",{attrs:{id:"发布分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布分支","aria-hidden":"true"}},[e._v("#")]),e._v(" 发布分支")]),e._v(" "),a("p",[a("img",{attrs:{src:"/funtl/assets/git-workflow-release-cycle-3release.png",alt:""}})]),e._v(" "),a("p",[e._v("一旦 develop 分支上有了做一次发布（或者说快到了既定的发布日）的足够功能，就从 develop 分支上 fork 一个发布分支。新建的分支用于开始发布循环，所以从这个时间点开始之后新的功能不能再加到这个分支上 —— 这个分支只应该做 Bug 修复、文档生成和其它面向发布任务。一旦对外发布的工作都完成了，发布分支合并到 master 分支并分配一个版本号打好 Tag。另外，这些从新建发布分支以来的做的修改要合并回 develop 分支。")]),e._v(" "),a("p",[e._v("使用一个用于发布准备的专门分支，使得一个团队可以在完善当前的发布版本的同时，另一个团队可以继续开发下个版本的功能。这也打造定义良好的开发阶段（比如，可以很轻松地说，『这周我们要做准备发布版本 4.0』，并且在仓库的目录结构中可以实际看到）。")]),e._v(" "),a("p",[e._v("常用的分支约定：")]),e._v(" "),a("ul",[a("li",[e._v("用于新建发布分支的分支: develop")]),e._v(" "),a("li",[e._v("用于合并的分支: master")]),e._v(" "),a("li",[e._v("分支命名: release-* 或 release/*")])]),e._v(" "),a("h3",{attrs:{id:"维护分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#维护分支","aria-hidden":"true"}},[e._v("#")]),e._v(" 维护分支")]),e._v(" "),a("p",[a("img",{attrs:{src:"/funtl/assets/git-workflow-release-cycle-4maintenance.png",alt:""}})]),e._v(" "),a("p",[e._v("维护分支或说是热修复（hotfix）分支用于生成快速给产品发布版本（production releases）打补丁，这是唯一可以直接从 master 分支 fork 出来的分支。修复完成，修改应该马上合并回 master 分支和 develop 分支（当前的发布分支），master 分支应该用新的版本号打好 Tag。")]),e._v(" "),a("p",[e._v("为 Bug 修复使用专门分支，让团队可以处理掉问题而不用打断其它工作或是等待下一个发布循环。你可以把维护分支想成是一个直接在 master 分支上处理的临时发布。")]),e._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[e._v("#")]),e._v(" 示例")]),e._v(" "),a("p",[e._v("下面的示例演示本工作流如何用于管理单个发布循环。假设你已经创建了一个中央仓库。")]),e._v(" "),a("h3",{attrs:{id:"创建开发分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建开发分支","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建开发分支")]),e._v(" "),a("p",[a("img",{attrs:{src:"/funtl/assets/git-workflow-release-cycle-5createdev.png",alt:""}})]),e._v(" "),a("p",[e._v("第一步为 master 分支配套一个 develop 分支。简单来做可以本地创建一个空的 develop 分支，push 到服务器上：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git branch develop\ngit push -u origin develop\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("以后这个分支将会包含了项目的全部历史，而 master 分支将只包含了部分历史。其它开发者这时应该克隆中央仓库，建好 develop 分支的跟踪分支：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git clone ssh://user@host/path/to/repo.git\ngit checkout -b develop origin/develop\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("现在每个开发都有了这些历史分支的本地拷贝。")]),e._v(" "),a("h3",{attrs:{id:"小红和小明开始开发新功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小红和小明开始开发新功能","aria-hidden":"true"}},[e._v("#")]),e._v(" 小红和小明开始开发新功能")]),e._v(" "),a("p",[a("img",{attrs:{src:"/funtl/assets/git-workflow-release-cycle-6maryjohnbeginnew.png",alt:""}})]),e._v(" "),a("p",[e._v("这个示例中，小红和小明开始各自的功能开发。他们需要为各自的功能创建相应的分支。新分支不是基于 master 分支，而是应该基于 develop 分支：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git checkout -b some-feature develop\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("他们用老套路添加提交到各自功能分支上：编辑、暂存、提交：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git status\ngit add\ngit commit\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h3",{attrs:{id:"小红完成功能开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小红完成功能开发","aria-hidden":"true"}},[e._v("#")]),e._v(" 小红完成功能开发")]),e._v(" "),a("p",[a("img",{attrs:{src:"/funtl/assets/git-workflow-release-cycle-7maryfinishes.png",alt:""}})]),e._v(" "),a("p",[e._v("添加了提交后，小红觉得她的功能 OK 了。如果团队使用 Pull Requests，这时候可以发起一个用于合并到 develop 分支。否则她可以直接合并到她本地的 develop 分支后 push 到中央仓库：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git pull origin develop\ngit checkout develop\ngit merge some-feature\ngit push\ngit branch -d some-feature\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("第一条命令在合并功能前确保 develop 分支是最新的。注意，功能决不应该直接合并到 master 分支。冲突解决方法和集中式工作流一样。")]),e._v(" "),a("h3",{attrs:{id:"小红开始准备发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小红开始准备发布","aria-hidden":"true"}},[e._v("#")]),e._v(" 小红开始准备发布")]),e._v(" "),a("p",[a("img",{attrs:{src:"/funtl/assets/git-workflow-release-cycle-8maryprepsrelease.png",alt:""}})]),e._v(" "),a("p",[e._v("这个时候小明正在实现他的功能，小红开始准备她的第一个项目正式发布。像功能开发一样，她用一个新的分支来做发布准备。这一步也确定了发布的版本号：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git checkout -b release-0.1 develop\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("这个分支是清理发布、执行所有测试、更新文档和其它为下个发布做准备操作的地方，像是一个专门用于改善发布的功能分支。")]),e._v(" "),a("p",[e._v("只要小红创建这个分支并 push 到中央仓库，这个发布就是功能冻结的。任何不在 develop 分支中的新功能都推到下个发布循环中。")]),e._v(" "),a("h3",{attrs:{id:"小红完成发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小红完成发布","aria-hidden":"true"}},[e._v("#")]),e._v(" 小红完成发布")]),e._v(" "),a("p",[a("img",{attrs:{src:"/funtl/assets/git-workflow-release-cycle-9maryfinishes.png",alt:""}})]),e._v(" "),a("p",[e._v("一旦准备好了对外发布，小红合并修改到 master 分支和 develop 分支上，删除发布分支。合并回 develop 分支很重要，因为在发布分支中已经提交的更新需要在后面的新功能中也要是可用的。另外，如果小红的团队要求 Code Review，这是一个发起 Pull Request 的理想时机。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git checkout master\ngit merge release-0.1\ngit push\ngit checkout develop\ngit merge release-0.1\ngit push\ngit branch -d release-0.1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("发布分支是作为功能开发（develop 分支）和对外发布（master 分支）间的缓冲。只要有合并到 master 分支，就应该打好 Tag 以方便跟踪。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('git tag -a 0.1 -m "Initial public release" master\ngit push --tags\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Git 有提供各种勾子（hook），即仓库有事件发生时触发执行的脚本。可以配置一个勾子，在你 push 中央仓库的 master 分支时，自动构建好对外发布。")]),e._v(" "),a("h3",{attrs:{id:"最终用户发现-bug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最终用户发现-bug","aria-hidden":"true"}},[e._v("#")]),e._v(" 最终用户发现 Bug")]),e._v(" "),a("p",[a("img",{attrs:{src:"/funtl/assets/git-workflow-gitflow-enduserbug.png",alt:""}})]),e._v(" "),a("p",[e._v("对外发布后，小红回去和小明一起做下个发布的新功能开发，直到有最终用户开了一个 Ticket 抱怨当前版本的一个 Bug。为了处理 Bug，小红（或小明）从 master 分支上拉出了一个维护分支，提交修改以解决问题，然后直接合并回 master 分支：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git checkout -b issue-#001 master\n# Fix the bug\ngit checkout master\ngit merge issue-#001\ngit push\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("就像发布分支，维护分支中新加这些重要修改需要包含到 develop 分支中，所以小红要执行一个合并操作。然后就可以安全地删除这个分支了：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git checkout develop\ngit merge issue-#001\ngit push\ngit branch -d issue-#001\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),a("p",[e._v("到了这里，但愿你对集中式工作流、功能分支工作流和 GitFlow 工作流已经感觉很舒适了。你应该也牢固的掌握了本地仓库的潜能，push/pull 模式和 Git 健壮的分支和合并模型。")]),e._v(" "),a("p",[e._v("记住，这里演示的工作流只是可能用法的例子，而不是在实际工作中使用 Git 不可违逆的条例。所以不要畏惧按自己需要对工作流的用法做取舍。不变的目标就是让 Git 为你所用。")])])},[],!1,null,null,null);s.default=r.exports}}]);