(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{328:function(t,a,s){"use strict";s.r(a);var n=s(10),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"xml弹幕"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xml弹幕"}},[t._v("#")]),t._v(" xml弹幕")]),t._v(" "),a("p",[t._v("实时弹幕池容量有限（根据视频类型500-8000条不等），占满后再发送会使实时弹幕池底部的弹幕压入历史弹幕池（类似于堆栈）")]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E8%8E%B7%E5%8F%96%E5%AE%9E%E6%97%B6%E5%BC%B9%E5%B9%951"}},[t._v("获取实时弹幕1")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E8%8E%B7%E5%8F%96%E5%AE%9E%E6%97%B6%E5%BC%B9%E5%B9%952"}},[t._v("获取实时弹幕2")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%BC%B9%E5%B9%95%E6%A0%BC%E5%BC%8F"}},[t._v("弹幕格式")])])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"获取实时弹幕1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取实时弹幕1"}},[t._v("#")]),t._v(" 获取实时弹幕1")]),t._v(" "),a("blockquote",[a("p",[t._v("https://api.bilibili.com/x/v1/dm/list.so")])]),t._v(" "),a("p",[a("em",[t._v("请求方式：GET")])]),t._v(" "),a("p",[a("strong",[t._v("使用deflate压缩，注意解码")])]),t._v(" "),a("p",[a("strong",[t._v("url参数：")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("内容")]),t._v(" "),a("th",[t._v("必要性")]),t._v(" "),a("th",[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("oid")]),t._v(" "),a("td",[t._v("num")]),t._v(" "),a("td",[t._v("视频cid")]),t._v(" "),a("td",[t._v("必要")]),t._v(" "),a("td")])])]),t._v(" "),a("p",[a("strong",[t._v("示例：")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-G")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.bilibili.com/x/v1/dm/list.so'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'oid=144541892'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--compressed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'danmaku.xml'")]),t._v("\n")])])]),a("h2",{attrs:{id:"获取实时弹幕2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取实时弹幕2"}},[t._v("#")]),t._v(" 获取实时弹幕2")]),t._v(" "),a("blockquote",[a("p",[t._v("https://comment.bilibili.com/{cid}.xml")])]),t._v(" "),a("p",[a("em",[t._v("请求方式：GET")])]),t._v(" "),a("p",[t._v("效果与前者相同")]),t._v(" "),a("p",[a("strong",[t._v("使用deflate压缩，注意解码")])]),t._v(" "),a("p",[a("strong",[t._v("url路径：")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("内容")]),t._v(" "),a("th",[t._v("必要性")]),t._v(" "),a("th",[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("cid")]),t._v(" "),a("td",[t._v("num")]),t._v(" "),a("td",[t._v("视频cid")]),t._v(" "),a("td",[t._v("必要")]),t._v(" "),a("td")])])]),t._v(" "),a("p",[a("strong",[t._v("示例：")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://comment.bilibili.com/144541892.xml'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--compressed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'danmaku.xml'")]),t._v("\n")])])]),a("p",[a("strong",[t._v("xml回复：")])]),t._v(" "),a("details",[a("summary",[t._v("查看响应示例：")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("chatserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("chat.bilibili.com"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("chatserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("chatid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("144541892"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("chatid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mission")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mission")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("maxlimit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1500"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("maxlimit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("state")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("state")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("real_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("real_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("source")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("e-r"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("source")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("490.19100,1,25,16777215,1584268892,0,a16fe0dd,29950852386521095"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("从结尾回来看这里，更感动了！"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("18.77300,1,25,16777215,1584268920,0,4fe08d3,29950867226492933"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("咦三体居然还有动画"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("52.88400,1,25,16777215,1584268954,0,4fe08d3,29950885214289927"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("哈哈哈哈开心"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("25.51600,1,25,16777215,1584268957,0,e4b18b37,29950886612566021"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("红岸么"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("144.45200,1,25,16777215,1584269076,0,e4b18b37,29950948716576775"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("我就是想看我的世界里水滴长啥样"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("112.64100,1,25,16777215,1584269109,0,96606007,29950966302244871"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("有手指？"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("222.84000,1,25,16777215,1584269154,0,e4b18b37,29950989809745923"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("侦测到在途的聚变打击"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("284.77800,1,25,16777215,1584269216,0,e4b18b37,29951022237483011"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("都是虫子"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("398.00500,1,25,16777215,1584269329,0,e4b18b37,29951081615196163"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("ocean"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("432.17900,1,25,16777215,1584269363,0,e4b18b37,29951099571535943"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("村民，哼~"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("467.41900,1,25,16777215,1584269399,0,e4b18b37,29951118364639237"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("黄河之水天上来"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("6.71900,1,25,16777215,1584269422,0,70ba16f4,29951130398621699"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("镇站之宝"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("313.08600,1,25,16777215,1584269425,0,e531c9dc,29951131798994947"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("这水"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("587.87900,1,25,16777215,1584269519,0,e4b18b37,29951181142360071"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("海的那边是什么"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("618.05000,1,25,16777215,1584269549,0,e4b18b37,29951196901933061"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("折跃门准备完毕"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    …………\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"弹幕格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#弹幕格式"}},[t._v("#")]),t._v(" 弹幕格式")]),t._v(" "),a("h3",{attrs:{id:"xml格式结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xml格式结构"}},[t._v("#")]),t._v(" xml格式结构")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("标签 i")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("标签 chatserver：chat.bilibili.com")])]),t._v(" "),a("li",[a("p",[t._v("标签 chatid：视频cid")])]),t._v(" "),a("li",[a("p",[t._v("标签 mission：0")])]),t._v(" "),a("li",[a("p",[t._v("标签 maxlimit：实时弹幕池最大容量")])]),t._v(" "),a("li",[a("p",[t._v("标签 state：弹幕状态（0：正常 1：弹幕已关闭）")])]),t._v(" "),a("li",[a("p",[t._v("标签 real_name：0")])]),t._v(" "),a("li",[a("p",[t._v("标签 source：e-r")])]),t._v(" "),a("li",[a("p",[t._v("标签 d （带有属性 p）：弹幕内容")])])])])]),t._v(" "),a("h3",{attrs:{id:"属性-p"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性-p"}},[t._v("#")]),t._v(" 属性 p")]),t._v(" "),a("p",[t._v("字符串内每项用逗号"),a("code",[t._v(",")]),t._v("分隔")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("项")]),t._v(" "),a("th",[t._v("含义")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("0")]),t._v(" "),a("td",[t._v("视频内弹幕出现时间")]),t._v(" "),a("td",[t._v("float")]),t._v(" "),a("td",[t._v("秒")])]),t._v(" "),a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("弹幕类型")]),t._v(" "),a("td",[t._v("int32")]),t._v(" "),a("td",[t._v("1 2 3：普通弹幕"),a("br"),t._v("4：底部弹幕"),a("br"),t._v("5：顶部弹幕"),a("br"),t._v("6：逆向弹幕"),a("br"),t._v("7：高级弹幕"),a("br"),t._v("8：代码弹幕"),a("br"),t._v("9：BAS弹幕（"),a("code",[t._v("pool")]),t._v("必须为2）")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("弹幕字号")]),t._v(" "),a("td",[t._v("int32")]),t._v(" "),a("td",[t._v("18：小"),a("br"),t._v("25：标准"),a("br"),t._v("36：大")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("弹幕颜色")]),t._v(" "),a("td",[t._v("int32")]),t._v(" "),a("td",[t._v("十进制RGB888值")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("弹幕发送时间")]),t._v(" "),a("td",[t._v("int32")]),t._v(" "),a("td",[t._v("时间戳")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("弹幕池类型")]),t._v(" "),a("td",[t._v("int32")]),t._v(" "),a("td",[t._v("0：普通池"),a("br"),t._v("1：字幕池"),a("br"),t._v("2：特殊池（代码/BAS弹幕）")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[t._v("发送者mid的HASH")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("用于屏蔽用户和查看用户发送的所有弹幕   也可反查用户id")])]),t._v(" "),a("tr",[a("td",[t._v("7")]),t._v(" "),a("td",[t._v("弹幕dmid")]),t._v(" "),a("td",[t._v("int64")]),t._v(" "),a("td",[t._v("唯一  可用于操作参数")])]),t._v(" "),a("tr",[a("td",[t._v("8")]),t._v(" "),a("td",[t._v("弹幕的屏蔽等级")]),t._v(" "),a("td",[t._v("int32")]),t._v(" "),a("td",[t._v("0-10，低于用户设定等级的弹幕将被屏蔽"),a("br"),t._v("（新增，下方样例未包含）")])])])]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("490.19100,1,25,16777215,1584268892,0,a16fe0dd,29950852386521095"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("从结尾回来看这里，更感动了！"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("弹幕内容为：“从结尾回来看这里，更感动了！”")]),t._v(" "),a("p",[t._v("参数为：视频内出现的时间是490.19100秒，类型是普通弹幕，字号为标准，颜色为白色（#FFFFFF），发送时间是2020/3/15 18:41:32.........")]),t._v(" "),a("h3",{attrs:{id:"web版标准颜色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web版标准颜色"}},[t._v("#")]),t._v(" web版标准颜色")]),t._v(" "),a("p",[t._v("弹幕的颜色属性使用"),a("strong",[t._v("十进制RGB888")]),t._v("值")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("颜色")]),t._v(" "),a("th",[t._v("HEX（RGB888）")]),t._v(" "),a("th",[t._v("DEC（RGB888）")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("font",{attrs:{color:"#FE0302"}},[t._v("红色")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#FE0302"}},[t._v("FE0302")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#FE0302"}},[t._v("16646914‬")])],1)]),t._v(" "),a("tr",[a("td",[a("font",{attrs:{color:"#FF7204"}},[t._v("橘红")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#FF7204"}},[t._v("FF7204")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#FF7204"}},[t._v("16740868")])],1)]),t._v(" "),a("tr",[a("td",[a("font",{attrs:{color:"#FFAA02"}},[t._v("橘黄")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#FFAA02"}},[t._v("FFAA02")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#FFAA02"}},[t._v("16755202")])],1)]),t._v(" "),a("tr",[a("td",[a("font",{attrs:{color:"#FFD302"}},[t._v("淡黄")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#FFD302"}},[t._v("FFD302")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#FFD302"}},[t._v("16765698")])],1)]),t._v(" "),a("tr",[a("td",[a("font",{attrs:{color:"#FFFF00"}},[t._v("黄色")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#FFFF00"}},[t._v("FFFF00")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#FFFF00"}},[t._v("16776960")])],1)]),t._v(" "),a("tr",[a("td",[a("font",{attrs:{color:"#A0EE00"}},[t._v("草绿")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#A0EE00"}},[t._v("A0EE00")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#A0EE00"}},[t._v("10546688")])],1)]),t._v(" "),a("tr",[a("td",[a("font",{attrs:{color:"#00CD00"}},[t._v("绿色")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#00CD00"}},[t._v("00CD00")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#00CD00"}},[t._v("52480")])],1)]),t._v(" "),a("tr",[a("td",[a("font",{attrs:{color:"#019899"}},[t._v("墨绿")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#019899"}},[t._v("019899")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#019899"}},[t._v("104601")])],1)]),t._v(" "),a("tr",[a("td",[a("font",{attrs:{color:"#4266BE"}},[t._v("紫色")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#4266BE"}},[t._v("4266BE")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#4266BE"}},[t._v("4351678")])],1)]),t._v(" "),a("tr",[a("td",[a("font",{attrs:{color:"#89D5FF"}},[t._v("青色")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#89D5FF"}},[t._v("89D5FF")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#89D5FF"}},[t._v("9022215")])],1)]),t._v(" "),a("tr",[a("td",[a("font",{attrs:{color:"#CC0273"}},[t._v("品红")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#CC0273"}},[t._v("CC0273")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#CC0273"}},[t._v("13369971")])],1)]),t._v(" "),a("tr",[a("td",[a("font",{attrs:{color:"#222222"}},[t._v("黑色")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#222222"}},[t._v("222222")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#222222"}},[t._v("2236962")])],1)]),t._v(" "),a("tr",[a("td",[a("font",{attrs:{color:"#9B9B9B"}},[t._v("灰色")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#9B9B9B"}},[t._v("9B9B9B")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#9B9B9B"}},[t._v("10197915")])],1)]),t._v(" "),a("tr",[a("td",[a("font",{attrs:{color:"#FFFFFF"}},[t._v("白色")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#FFFFFF"}},[t._v("FFFFFF")])],1),t._v(" "),a("td",[a("font",{attrs:{color:"#FFFFFF"}},[t._v("16777215")])],1)])])])])}),[],!1,null,null,null);a.default=r.exports}}]);