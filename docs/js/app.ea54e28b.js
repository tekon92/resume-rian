(function(e){function t(t){for(var n,r,s=t[0],c=t[1],l=t[2],d=0,u=[];d<s.length;d++)r=s[d],o[r]&&u.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);h&&h(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-14b2f2ce":"a82e1d9b","chunk-2d0bff30":"8d1ea2b3","chunk-2d0c7b16":"25e35500","chunk-2d0cc602":"aeb069d2","chunk-2d0d001a":"58316150","chunk-2d0d9fe3":"c5543b09","chunk-2d0e6c3b":"58a57897","chunk-2d22fd44":"c55c3dde"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-14b2f2ce":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise(function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-14b2f2ce":"74d8907c","chunk-2d0bff30":"31d6cfe0","chunk-2d0c7b16":"31d6cfe0","chunk-2d0cc602":"31d6cfe0","chunk-2d0d001a":"31d6cfe0","chunk-2d0d9fe3":"31d6cfe0","chunk-2d0e6c3b":"31d6cfe0","chunk-2d22fd44":"31d6cfe0"}[e]+".css",o=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===o))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===n||d===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],h.parentNode.removeChild(h),a(i)},h.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(h)}).then(function(){r[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,a){n=o[e]=[t,a]});t.push(n[2]=i);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e),l=function(t){d.onerror=d.onload=null,clearTimeout(u);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+n+": "+r+")");i.type=n,i.request=r,a[1](i)}o[e]=void 0}};var u=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/resume-rian/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var h=d;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"001c":function(e,t,a){"use strict";var n=a("9aad"),r=a.n(n);r.a},"034f":function(e,t,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"1ff6":function(e){e.exports={2019:[{id:"vue-markdown-blog",date:"March 10, 2019",title:"Creating a Simple Blog using Vue + Markdown",description:"Simple and neat way to add a blogging feature to add on your website."}],stories:[{id:"maud-sparrow",date:"April 21, 2018",title:"Maud Sparrow and the Four Wicked Horses",description:"Once upon a time there was a generous girl called Maud Sparrow. She was on the way to see her Albert Connor, when she decided to take a short cut through Spittleton Woods..."},{id:"nico-borbaki",date:"May 5, 2018",title:"Nefarious Nico Borbaki",description:"Nico Borbaki looked at the enchanted newspaper in his hands and felt conflicted..."},{id:"jack-butterscotch",date:"June 10, 2018",title:"Jack Butterscotch | The Dragon",description:"In a hole there lived a tender, silver dragon named Jack Butterscotch. Not an enchanted red, stripy hole, filled with flamingos and a cold smell, nor yet a short, hairy, skinny hole with nothing in it to sit down on or to eat: it was a dragon-hole, and that means happiness..."},{id:"tiny-arrow-wars",date:"July 27, 2018",title:"Galactic Tiny Arrow Wars",description:"A long, long time ago in a tiny, tiny galaxy..."},{id:"gargoyle-club",date:"August 7, 2018",title:"Club of Gargoyle",description:"Molly Thornhill suspected something was a little off when her creepy daddy tried to club her when she was just six years old. Nevertheless, she lived a relatively normal life among other humans."},{id:"simon-plumb",date:"September 20, 2018",title:"Simon Plumb and the Two Kind Gerbils",description:"Once upon a time there was a virtuous boy called Simon Plumb. He was on the way to see his Annie Superhalk, when he decided to take a short cut through Thetford Forest..."}]}},"30b4":function(e,t,a){},"45ac":function(e,t,a){var n={"./2019/vue-markdown-blog.md":["4064","chunk-2d0bff30"],"./stories/gargoyle-club.md":["5269","chunk-2d0c7b16"],"./stories/jack-butterscotch.md":["65af","chunk-2d0d001a"],"./stories/maud-sparrow.md":["6a68","chunk-2d0d9fe3"],"./stories/nico-borbaki.md":["99af","chunk-2d0e6c3b"],"./stories/simon-plumb.md":["ea4f","chunk-2d22fd44"],"./stories/tiny-arrow-wars.md":["4e50","chunk-2d0cc602"]};function r(e){var t=n[e];return t?a.e(t[1]).then(function(){var e=t[0];return a(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}r.keys=function(){return Object.keys(n)},r.id="45ac",e.exports=r},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("ul",{staticClass:"nav__container"},[a("nav",{staticClass:"nav"},[a("router-link",{staticClass:"nav__btn",attrs:{to:"/"}},[e._v("Home")]),a("router-link",{staticClass:"nav__btn",attrs:{to:"/🎒"}},[e._v("Education")])],1)]),a("Hero"),a("div",{staticClass:"card__container"},[a("router-view")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hero"},[a("h1",{staticClass:"hero__header"},[e._v(e._s(e.resume.basic.name))]),a("h4",{staticClass:"hero__subheader"},[e._v(e._s(e.resume.basic.location.city)+" - "+e._s(e.resume.basic.location.country)),a("span",{attrs:{role:"img","aria-label":"Sun"}},[e._v("☀️")])]),a("p",[e._v(e._s(e.resume.basic.label))]),a("p",{staticClass:"hero__text"},[a("a",{attrs:{href:"#"},on:{click:e.pdfgen}},[e._v("PDF version")]),e._v(" of the resume.\n    ")]),e._m(0),a("span",{staticClass:"hero__arrow",attrs:{role:"img","aria-label":"Arrow down"}},[e._v("⬇️")])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hero__link-container"},[n("a",{staticClass:"hero__link",attrs:{href:"https://github.com/tekon92/resume-rian",target:"_blank",rel:"noopener noreferrer"}},[e._v("\n        made with\n        "),n("img",{staticClass:"hero__logo",attrs:{alt:"Vue logo",src:a("cf05")}})])])}],c=(a("7f7f"),a("c659")),l=(a("3022"),a("e499")),d=a("4ebb"),u={name:"Hero",computed:{resume:function(){return c}},methods:{pdfgen:function(){var e=this.resume.basic,t=(this.resume.work,this.resume.education);void 0===l.vfs&&(l.vfs=d.pdfMake.vfs);var a={content:[{text:e.name,style:"header",alignment:"center"},{text:e.location.city+" - "+e.location.country,style:"subheader",alignment:"center"},{text:"Email:"+e.email+" | Phone: "+e.phone,style:"small",alignment:"center"},{text:"===========================================================================",style:"small",alignment:"center"},{stack:[e.label,{text:e.summary,style:"contentWithMargin"}],style:"superMargin"},{stack:["WORK EXPERIANCE",{text:"====================================",style:"small"}],style:"notSuperMargin"},{stack:["PT.Tech Mahindra Indonesia","Software Developer","July 2015 - Now","Various Projects utilizing (Greenplum - PosgtreSQL, Oracle, Shell Script, IBM DataStage, and SAP BusinessObject also DWH day to day basis monitoring.",{ol:["Time Commitment : Generate Bonus (Chest) for retailer each they passed the threshold on certain periode/season.","Treasure Chest : Generate Bonus (Chest) for retailer each they passed the threshold.","CENO : Generate Data from multiple source system, transform raw data, and dump the transoformized data into files.","Customer Segmentation : Create segmentation for subscribers based on their ARPU (Average Revenue per User).","Customer360 : this project was build to give 360 view about customers. we design this apps to works with machine learning. the database was built using greenplum postgresql, r language for the machine learning, dashboard that built on desktop and mobile.","Database Migration : Upgrading our old greenplum db version to the latest one. i manage to mapping table that we use, manage to check the capability of our environment, analyze which table that can be migrated first (partition table) and table that needs to be migrated the same date with migration date.","Angie2 Mobile Apps : (mobile application for retailer). we create this app so our client (hutchinson Indonesia) can track their retailer transaction and trends. i managed to design the ETL job to provide the data real time, database that we used is oracle","Hadoop Instalation : on this assignment, i need to do some research about hadoop hortonworks. the capability of their big data storage wether can give benefit to our next project. HDP hortonworks was installed on 3 server, 1 master and 2 slaves"]}],style:"contentWithMargin"},{stack:["PT. Growinc Indonesia","Fullstack Engineer","October 2014 - May 2015","Various projects utilizing Laravel, JS, CSS.",{ol:["Yukbaca.co.id : Create Yukbaca.co.id, An book writing platform, and an online storefront where you can buy our authors' books.","suara.merah.putih.com : Blog Platform and online publication."]}],style:"contentWithMargin"},{stack:["customkita.com","Frontend Developer","September 2013 - January 2014","working as an internee to handle front end of online marketplace for custom products.",{ol:["0 : Frontend Sass development with the focus on reusability and cross-browser compatibility.","1 : OpenCart implementations.","2 : CSS and Javascript Improvement."]}],style:"contentWithMargin"},{stack:["EDUCATION",{text:"====================================",style:"small"}],style:"notSuperMargin"},{stack:[{text:t[0].company,style:"superMargin"},t[0].position,t[0].startDate+" - "+t[0].endDate],style:"contentWithMargin"},{stack:["CONTACT",{text:"====================================",style:"small"}],style:"notSuperMargin"},{stack:["Phone :"+e.phone,"Email :"+e.email,"Website :"+e.website],style:"contentWithMargin"}],styles:{header:{fontSize:18,bold:!0,alignment:"justify"},subheader:{fontSize:15,bold:!0},quote:{italics:!0},small:{fontSize:8},superMargin:{margin:[0,20,0,10],fontSize:15},notSuperMargin:{margin:[0,10,0,10],fontSize:15},contentWithMargin:{margin:[0,10,0,10],fontSize:12}}};l.createPdf(a).download("resume-rian.pdf")}}},h=u,m=(a("ba9b"),a("2877")),p=Object(m["a"])(h,i,s,!1,null,"6d6808dc",null),b=p.exports,f={name:"App",components:{Hero:b}},g=f,y=(a("034f"),Object(m["a"])(g,r,o,!1,null,null,null)),v=y.exports,w=a("75fc"),k=(a("ac6a"),a("456d"),a("8c4f")),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",{staticClass:"headline center"},[e._v("v-m-blog")]),n("img",{attrs:{src:a("cf05"),alt:"Vue Logo"}}),n("div",{staticClass:"sections"},e._l(Object.keys(e.entries),function(t,a){return n("div",{key:a,staticClass:"group"},[n("h2",{staticClass:"center"},[e._v(e._s(t))]),e._l(e.entries[t],function(t){return n("div",{key:t.id,staticClass:"section"},[n("div",{staticClass:"entry"},[n("h3",{on:{click:function(a){return e.$router.push({name:t.id})}}},[e._v("\n            "+e._s(t.title)+"\n            "),n("span",{staticClass:"subtitle"},[e._v(e._s(t.date))])]),n("p",[e._v(e._s(t.description))])])])})],2)}),0)])},C=[],S=a("1ff6"),j={name:"stories",computed:{entries:function(){return S}}},O=j,D=(a("66c2"),Object(m["a"])(O,_,C,!1,null,"5a7b9521",null)),P=D.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card__content"},e._l(e.jobs.work,function(e){return a("Card",{key:e,attrs:{company:e.company,position:e.position,startDate:e.startDate,endDate:e.endDate,summary:e.summary,highlights:e.highlights,styleObject:e.styleObject}})}),1)},T=[],A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"job__container",style:e.styleObject},[a("div",{staticClass:"job"},[a("div",{staticClass:"job__header"},[a("h3",[e._v(e._s(e.company))]),a("h4",[e._v(e._s(e.position))])]),a("div",{staticClass:"job__date"},[e._v(e._s(e.startDate)+" to "+e._s(e.endDate))]),a("br"),a("p",{staticClass:"job__paragraph"},[e._v(e._s(e.summary))]),a("ul",{staticClass:"job__list"},e._l(e.highlights,function(t,n){return a("li",{key:t},[a("span",{staticClass:"bold"},[e._v(e._s(n))]),e._v(": "+e._s(t)+"\n      ")])}),0)])])},x=[],E={name:"Card",props:["company","position","startDate","endDate","summary","highlights","styleObject"]},I=E,N=(a("001c"),Object(m["a"])(I,A,x,!1,null,"d67276a2",null)),z=N.exports,G={name:"home",components:{Card:z},computed:{jobs:function(){return c}}},B=G,H=Object(m["a"])(B,M,T,!1,null,null,null),J=H.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card__content"},e._l(e.jobs.education,function(e){return a("Card",{key:e,attrs:{company:e.company,position:e.position,startDate:e.startDate,endDate:e.endDate,styleObject:e.styleObject}})}),1)},F=[],L={name:"home",components:{Card:z},computed:{jobs:function(){return c}}},U=L,V=(a("be9a"),Object(m["a"])(U,W,F,!1,null,"c21b52f8",null)),$=V.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vuepdf"},[a("h1",[e._v(e._s(e.msg))]),a("div",{attrs:{id:"pdf"}},[a("button",{on:{click:e.pdfgen}},[e._v("Generate PDF")])])])},q=[],K=a("e499"),Y=a("4ebb"),Q={name:"pdfgen",props:{msg:String},computed:{resume:function(){return c}},methods:{pdfgen:function(){void 0===K.vfs&&(K.vfs=Y.pdfMake.vfs);var e={content:[{text:this.resume.basic.name,style:"header",alignment:"center"},{text:this.resume.basic.location.city+" - "+this.resume.basic.location.country,style:"subheader",alignment:"center"},{text:"Email:"+this.resume.basic.email+" | Phone: "+this.resume.basic.phone,style:"small",alignment:"center"},{text:"===========================================================================",style:"small",alignment:"center"}],styles:{header:{fontSize:18,bold:!0,alignment:"justify"},subheader:{fontSize:15,bold:!0},quote:{italics:!0},small:{fontSize:8}}};K.createPdf(e).download("optionalName.pdf")}}},X=Q,Z=(a("df60"),Object(m["a"])(X,R,q,!1,null,"bd0c9b26",null)),ee=Z.exports;n["a"].use(k["a"]);var te=Object.keys(S).map(function(e){var t=S[e].map(function(t){return{path:t.id,name:t.id,component:function(){return a("45ac")("./".concat(e,"/").concat(t.id,".md"))}}});return{path:"/".concat(e),name:e,component:function(){return a.e("chunk-14b2f2ce").then(a.bind(null,"fd3f"))},children:t}}),ae=new k["a"]({mode:"history",base:"/resume-rian/",routes:[{path:"/",name:"home",component:J},{path:"/🎒",name:"education",component:$},{path:"/💻",name:"award",component:$},{path:"/📧",name:"contact",component:$},{path:"/pdf",name:"pdf",component:ee},{path:"/stories",name:"Story",component:P}].concat(Object(w["a"])(te))});n["a"].config.productionTip=!1,new n["a"]({router:ae,render:function(e){return e(v)}}).$mount("#app")},"64a9":function(e,t,a){},"66c2":function(e,t,a){"use strict";var n=a("a696"),r=a.n(n);r.a},"9aad":function(e,t,a){},a696:function(e,t,a){},ba9b:function(e,t,a){"use strict";var n=a("30b4"),r=a.n(n);r.a},be9a:function(e,t,a){"use strict";var n=a("df64"),r=a.n(n);r.a},c659:function(e){e.exports={basic:{name:"Rian Pauzi",label:"Data Engineer by Day, Frontend Engineer by Night",email:"pauzirian@gmail.com",phone:"6285959502653",website:"https://tekon92.github.io/resume-rian/",summary:"Organized and motivated frontend developer seeking to work closely with a team of experienced engineers to craft a product that has an impact.",location:{postalCode:"15118",city:"Tangerang",countryCode:"IDN",country:"Indonesia",region:"JKT"},pdf:"pauzi-rian.pdf"},work:[{company:"PT.Tech Mahindra Indonesia",current:!1,position:"Software Developer",website:"https://www.techmahindra.com",startDate:"July 2015",endDate:"Now",summary:"Various Projects utilizing (Greenplum - PosgtreSQL, Oracle, Shell Script, IBM DataStage, and SAP BusinessObject also DWH day to day basis monitoring.",highlights:{"Time Commitment":"Generate Bonus (Chest) for retailer each they passed the threshold on certain periode/season.","Treasure Chest":"Generate Bonus (Chest) for retailer each they passed the threshold.",CENO:"Generate Data from multiple source system, transform raw data, and dump the transoformized data into files.","Customer Segmentation":"Create segmentation for subscribers based on their ARPU (Average Revenue per User).",Customer360:"this project was build to give 360 view about customers. we design this apps to works with machine learning. the database was built using greenplum postgresql, r language for the machine learning, dashboard that built on desktop and mobile.","Database Migration":"Upgrading our old greenplum db version to the latest one. i manage to mapping table that we use, manage to check the capability of our environment, analyze which table that can be migrated first (partition table) and table that needs to be migrated the same date with migration date.","Angie2 Mobile Apps":"(mobile application for retailer). we create this app so our client (hutchinson Indonesia) can track their retailer transaction and trends. i managed to design the ETL job to provide the data real time, database that we used is oracle","Hadoop Instalation":"on this assignment, i need to do some research about hadoop hortonworks. the capability of their big data storage wether can give benefit to our next project. HDP hortonworks was installed on 3 server, 1 master and 2 slaves"},styleObject:{background:"#314872"}},{company:"PT. Growinc Indonesia",current:!1,position:"Fullstack Engineer",website:"merahputih.id",startDate:"October 2014",endDate:"May 2015",summary:"Various projects utilizing Laravel, JS, CSS.",highlights:{"Yukbaca.co.id":"Create Yukbaca.co.id, An book writing platform, and an online storefront where you can buy our authors books.","suara.merahputih.com":"Blog Platform and online publication."},styleObject:{background:"#4da5b0"}},{company:"customkita.com",current:!1,position:"Frontend Developer",website:"-",startDate:"September 2013",endDate:"January 2014",summary:"working as an internee to handle front end of online marketplace for custom products.",highlights:["Frontend Sass development with the focus on reusability and cross-browser compatibility.","OpenCart implementations.","CSS and Javascript Improvement."],styleObject:{background:"#5c637d"}}],education:[{company:"Bina Nusantara University",current:!1,position:"System Information & Management",startDate:"August 2009",endDate:"September 2014",summary:"Various projects utilizing ES6, Gatsby, Sass and WordPress.",highlights:["Improved client's development workflow by incorpating modern tools like: Webpack, Gulp, ESLint, Prettier, Jest, Ansible and others.","Ensure that the developing codebase conforms to best practices with regard to coding standards.","A/B tested multiple CTA components and improved conversions by 23%"],styleObject:{background:"#4da5b0 ",height:"100%"}}],award:[{company:"PT.Tech Mahindra Indonesia",award:"Standing Ovation Award",summary:"https://www.slideshare.net/slideshow/embed_code/key/ADtH7vwGT9v8bp",by:"Vikas Gajendra Sharma"},{company:"PT.Tech Mahindra Indonesia",award:"Standing Ovation Award",website:"https://www.slideshare.net/slideshow/embed_code/key/ADtH7vwGT9v8bp",summary:"",by:"Vikas Gajendra Sharma"},{company:"PT.Tech Mahindra Indonesia",award:"Standing Ovation Award",website:"https://www.slideshare.net/slideshow/embed_code/key/ADtH7vwGT9v8bp",summary:"",by:"Vikas Gajendra Sharma"}]}},cd58:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},df60:function(e,t,a){"use strict";var n=a("cd58"),r=a.n(n);r.a},df64:function(e,t,a){}});
//# sourceMappingURL=app.ea54e28b.js.map