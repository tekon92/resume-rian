(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d237910"],{fc52:function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s.$createElement;s._self._c;return s._m(0)},r=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("section",[t("h1",[s._v("Day 2 | Complex Type")]),t("h4",[s._v("June 8, 2019")]),t("p",[s._v("Today i learned about, Complex Data Type")]),t("ol",[t("li",[s._v("Array")]),t("li",[s._v("Sets")]),t("li",[s._v("Tuples")]),t("li",[s._v("Dictionaries")]),t("li",[s._v("Enumerations")])]),t("p",[s._v("and the summaries are:")]),t("ol",[t("li",[s._v("Array, sets, tuples and dictionaries let you store a group if items under a single value. they each do this in different ways, so which you use depends on the behavior you want.")]),t("li",[s._v("Array store items in the order you add them, and you access them using numerical positions.")]),t("li",[s._v("Sets store items without any order you add them, and you access them using numerical positions.")]),t("li",[s._v("Tuples are fixed in size, and you can attach names to each of their items. you can read items using numerical positions or using your name.")]),t("li",[s._v("Dictionaries atore items according to a key, and you read ites using those keys.")]),t("li",[s._v("Enums are a way of grouping related values so you can use them without spelling mistakes.")]),t("li",[s._v("You can attach raw values to enums so the can be created from integers or strings, or you can add associated values to store additional about each case.")]),t("li",[s._v("Array, sets, and tuples can seem similiar at first, but they have distinc uses.\na. if you need a specific, fixed collections of related values where each items has a precise position or name, you should use tuple:")])]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[s._v('```swift\nlet address = (house: 555, street: "Taylor Swift Avenue", city: "Nashville")\n```\n')])]),t("p",[s._v("b. if you need a collection of values that must be uniques or you need to be able to check whether a specific item is in there extremely quickly, you should use a set")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-swift"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("set")]),s._v(" = "),t("span",{pre:!0,attrs:{class:"hljs-type"}},[s._v("Set")]),s._v("(["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"aardvark"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"astronaut"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"azalea"')]),s._v("])\n")])]),t("p",[s._v("c. if you need a collection of values that can containe duplicates or the order of your items matters, you should use array.")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-swift"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" pythons = ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Eric"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Graham"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"John"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Michael"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Terry"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Terry"')]),s._v("]\n")])]),t("p",[s._v("d. if you need a collection of values just like arrays, but rather than storing things with an integer position you can access them using anything you want.")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-swift"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" heights = [\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Taylor Swift"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.78")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Ed Sheeran"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.73")]),s._v("\n]\nheights["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Taylor Swift"')]),s._v("]\n")])]),t("p",[s._v("e.are a way of defining groups of related values in a way that makes them easier to use.This stops you from accidentally using different strings each time.")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-swift"}},[t("span",{pre:!0,attrs:{class:"hljs-class"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("enum")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("Result")]),s._v(" ")]),s._v("{\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("case")]),s._v(" success\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("case")]),s._v(" failure\n}\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" result4 = "),t("span",{pre:!0,attrs:{class:"hljs-type"}},[s._v("Result")]),s._v(".failure\n")])]),t("ol",{attrs:{start:"9"}},[t("li",[s._v("creating empty collection\na. Dictionaries")])]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-swift"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" teams = ["),t("span",{pre:!0,attrs:{class:"hljs-type"}},[s._v("String")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-type"}},[s._v("String")]),s._v("]()\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" scores = "),t("span",{pre:!0,attrs:{class:"hljs-type"}},[s._v("Dictionaries")]),s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-type"}},[s._v("String")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-type"}},[s._v("Int")]),s._v(">()\n")])]),t("p",[s._v("b. Array")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-swift"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" results = ["),t("span",{pre:!0,attrs:{class:"hljs-type"}},[s._v("Int")]),s._v("]()\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" results = "),t("span",{pre:!0,attrs:{class:"hljs-type"}},[s._v("Array")]),s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-type"}},[s._v("Int")]),s._v(">()\n")])]),t("p",[s._v("c. Set")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-swift"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" words = "),t("span",{pre:!0,attrs:{class:"hljs-type"}},[s._v("Set")]),s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-type"}},[s._v("String")]),s._v(">()\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" numbers = "),t("span",{pre:!0,attrs:{class:"hljs-type"}},[s._v("Set")]),s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-type"}},[s._v("Int")]),s._v(">()\n")])]),t("p",[s._v("that's all folks for today, see you tomorrow.")]),t("p",[s._v("PS: anyway im creating twitter user interface using NUXT. you can find it here("),t("a",{attrs:{href:"https://github.com/tekon92/nuxt-twitter"}},[s._v("git")]),s._v(") and live("),t("a",{attrs:{href:"https://xenodochial-aryabhata-bac2b6.netlify.com/"}},[s._v("netlify")]),s._v("). this still under progress and you might find some bugs (psst: dont hesitate to let me know if you find any.)")]),t("h3",[s._v("Useful Links")]),t("ul",[t("li",[t("a",{attrs:{href:"https://www.hackingwithswift.com/100"}},[s._v("Hacking with Swift")])]),t("li",[t("a",{attrs:{href:"https://github.com/tekon92/nuxt-twitter"}},[s._v("git")])]),t("li",[t("a",{attrs:{href:"https://xenodochial-aryabhata-bac2b6.netlify.com/"}},[s._v("netlify")])])])])}],n=t("2877"),l={},i=Object(n["a"])(l,a,r,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d237910.c9ee1c30.js.map