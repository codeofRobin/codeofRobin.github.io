(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(157),s=(a(213),a(7)),r=a.n(s),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.name,a=e.phoneNumber,n=e.email;return i.a.createElement("div",{className:"contactDetails"},i.a.createElement("h1",null,t),i.a.createElement("div",{className:"centeredFlex"},i.a.createElement("div",{className:"phone"},i.a.createElement("a",{href:"tel:"+a},a)),i.a.createElement("span",null,"|"),i.a.createElement("div",{className:"email"},i.a.createElement("a",{href:"mailto:"+n},n))))},t}(i.a.Component),c=a(214),u=a.n(c),p=a(320),d=a.n(p),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return u()().use(d.a).processSync(this.props.text).contents},t}(i.a.Component),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.bullets,a=e.heading,n=e.location,o=e.subtitle,s=e.dates;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"separated"},i.a.createElement("h3",{className:"sectionHeading"},a),i.a.createElement("div",{className:"location"},n)),i.a.createElement("div",{className:"separated"},i.a.createElement("div",{className:"subtitle"},o),i.a.createElement("div",{className:"dates"},s)),i.a.createElement("ul",null,t.map(function(e){return i.a.createElement("li",null," ",i.a.createElement(m,{text:e})," ")})))},t}(i.a.Component),b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.subSections,t=this.props.title;return i.a.createElement("div",{className:"section"},i.a.createElement("h1",{className:"sectionHeader"},t),e.map(function(e){return i.a.createElement(h,{data:e})}))},t}(i.a.Component),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.bullets,t=this.props.title;return i.a.createElement("div",{className:"titleAndBullets"},i.a.createElement("h1",{className:"sectionHeader"},t),i.a.createElement("ul",null,e.map(function(e){return i.a.createElement("li",null,i.a.createElement(m,{text:e}))})))},t}(i.a.Component),g=(a(363),"Robin Malhotra"),y="+91-9871269578",w="me@rmalhotra.com",v=[{title:"Experience",subSections:[{heading:"GO-JEK",subtitle:"Product Engineer",location:"Bangalore, India",dates:"Aug 2018 to present",bullets:["Refactored internal Auth SDK and migrated to using a new backend service. Increased test coverage to **95%+** on the networking stack as well as reduced number of LoCs from 11k+ to ~3k by migrating away from VIPER to a simpler MVC pattern.","Built an app from scratch in the video streaming space. Currently in internal alpha. Uses [Rome](https://github.com/blender/Rome/) to point to remote instances of [minio](minio.io) to cache dependencies and reduce build times to ~15 minutes (a 75% decrease). Set up continuous integration/continuous deployment pipelines with fastlane on gitlab-ci to automatically test, build and deploy the app to Testflight. Extensively uses the View Controller containment API to maintain testability and avoid Massive View Controllers.","Explored new ways of creating dynamic scrolling UI in iOS, a topic that eventually morphed into my talk at iOSCon 2019.","Introduced ways to automate changes to self-hosted CI machines using Tmuxinator, instead of manually configuring CI machines."]},{heading:"Kayako",subtitle:"Mobile Engineer-iOS",location:"Delhi, India",dates:"Aug 2016 to June 2018",bullets:["Built an enterprise agent app from scratch for support agents to easily communicate with customers in a chat like fashion. Consistently had a **>99.5% crash-free rate** and thousands of satisfied enterprise users. As the app scaled, refactored various parts to use more idiomatic reactive patterns in **RxSwift** to increase testability and moved some parts of the UI to **Texture** to maximize performance.","Also built an [Open Source SDK](https://developer.kayako.com/messenger/ios/installation/) for developers to integrate chat functionality in their apps","Maintained a legacy **Objective-C** app , reducing crashes by **50% MoM**. Also, added iPhone X support and fixed a few [Core Data Bugs arising from bad indices](https://oleb.net/blog/2013/02/nsfetchedresultscontroller-documentation-bug/).","[This twitter moment](https://twitter.com/i/moments/969158354252763136) highlights some of the work I did for Kayako that I’m most proud of."]}]},{title:"Education",subSections:[{heading:"Indian Institute of Technology",subtitle:"Bachelor of Technology (Textile Technology), Minor in Computer Science",location:"Delhi",dates:"2012-2016",bullets:["GPA: 8.19/10.0"]}]}],S=[{title:"Conference talks & articles",bullets:['🎤 Spoke at [iOSCon 2019, London](https://twitter.com/skillsmatter/status/1110496380508884992) about "Cellular View Controllers".',"✍️ Wrote an [article](https://medium.com/flawless-app-stories/why-i-build-my-apps-using-texture-and-why-you-should-too-99587c73f278) about using Texture (formerly known as AsyncDisplayKit) in iOS apps that was moderately popular and also made it to [iOS dev weekly](https://iosdevweekly.com/issues/354).",'🎤 Spoke at [try! Swift India](https://www.tryswift.co/events/2017/bangalore/#codeofrobin) in November 2017 on "[Refactoring your app using Rx](https://www.youtube.com/watch?v=QB1btv-eI3Y)".','👨🏽‍💻 Wrote an article on [Safely securing secret variables](https://medium.com/flawless-app-stories/secret-variables-in-xcode-and-your-ci-for-fun-and-profit-d387a50475d7) on Travis CI and Xcode. Over 1,000 "claps" received and has appeared in [several iOS newsletters](https://gist.github.com/codeOfRobin/71b1b16b9fa4a812e2974bb199f53ae5).',"[Regular](https://twitter.com/swiftindiagroup/status/959671228402454528) speaker [at the](https://twitter.com/_riteshhh/status/870897530719977472) Swift India [meetups](https://twitter.com/_riteshhh/status/837902266388500480)."]},{title:"Personal & Open Source Projects",bullets:["This very résumé is built in a résumé building app I'm working on that's both WYSIWYG and mobile responsive. It's not quite shippable yet but [here's](https://twitter.com/codeOfRobin/status/969140950491713536) a sneak peek.",'Currently working on a "Websocket cache" using [Phoenix](https://phoenixframework.org), partly to explore [Elixir](https://elixir-lang.org) and functional programming on the server side. It\'s still early days, but quite enjoyable.',"Added [CLI support](https://github.com/JohnSundell/SwiftPlate/pulls?q=is%3Apr+is%3Aclosed+author%3AcodeOfRobin) + [Homebrew support](https://github.com/Homebrew/homebrew-core/pull/8914) to Swiftplate by John Sundell.","Built a [NodeJS app](https://github.com/codeOfRobin/mathembed) that allows users to embed TeX equations in Medium articles.","Planning on building an [iOS UI magazine](https://twitter.com/codeOfRobin/status/1097066993046278145), that showcases popular iOS UI examples and how to build them. I've previously written an article on building [stretchy headers](https://medium.com/ios-os-x-development/recreating-spotify-s-tweetbot-s-artist-album-uitableview-8488979fc3e1#.b9ynyfn50), similar to Spotify and Tweetbot",'I felt most implementations of libraries that tried to "intelligently" diff tableViews such as [IGListKit](https://github.com/instagram/IGListKit), [RxDataSources](https://github.com/RxSwiftCommunity/RxDataSources/) or [ReactiveLists](https://github.com/plangrid/ReactiveLists/) were too heavy- handed / tightly coupled to UIKit so I wrote my own [40 line implelmentation](https://gist.github.com/codeOfRobin/99a91403d7f6545ec76bcd600de9c6be). As a-not-so-unexpected side effect, this also works with AsyncDisplayKit/Texture.',"Built an [interaction layer](https://github.com/codeOfRobin/swiftopencv) between swift and OpenCV using an Objective-C++ bridging header. Also wrote a well received [article](https://medium.com/ios-os-x-development/the-fd4fcb249358) on it.","[Refactored](https://github.com/3lvis/Networking/pull/182/) bits and bobs in a popular networking library."]}],E={title:"Internships",subSections:[{heading:"HOUSING.COM LABS, NEW DELHI",subtitle:"iOS Intern",location:"Delhi, India",dates:"Aug 2015 to Nov 2015",bullets:["Helped develop Pipal (an app to aid communication in apartment complexes) in Swift 2.2.","[Here](https://gfycat.com/reflectingflashydromaeosaur) are a [couple](https://gfycat.com/kindopendegu) of sneak peeks of the onboarding UI that I was responsible for."]},{heading:"ADITYA BIRLA GROUP",subtitle:"Intern",location:"Bangalore, India",dates:"May 2015 to July 2015",bullets:["Built a Production Optimisation System to generate manufacturing schedules from factory orders and automatically send them to concerned stakeholders.","Built in Python3 using Flask, Numpy and Pandas."]},{heading:"PAYTM, ONE 97 INC",subtitle:"iOS Intern",location:"Delhi, India",dates:"Dec 2014 to Jan 2015",bullets:["Worked on the Paytm Wallet iOS app - deals module and API integration. Built in **Objective-C** on the iOS 8 SDK.",'Featured all new design and interactions to enable new user experiences, including a "flat" Snapchat-like navigation.']}]};t.default=function(){return i.a.createElement("div",{className:"resumeContainer",style:{display:"flex",flexDirection:"column",alignItems:"center"}},i.a.createElement("div",{className:"resume"},i.a.createElement(l,{name:g,phoneNumber:y,email:w}),i.a.createElement(o.a,{title:"Robin Malhotra's résumé",keywords:["Robin Malhotra","iOS Developer","resume","résumé"]}),v.map(function(e){return i.a.createElement(b,{title:e.title,subSections:e.subSections})}),S.map(function(e){return i.a.createElement(f,{title:e.title,bullets:e.bullets})}),i.a.createElement(b,{title:E.title,subSections:E.subSections})),i.a.createElement("p",{className:"Footer"},"Made with 💛 and Gatsby.js. Need a PDF? ",i.a.createElement("a",{className:"DownloadButton",href:"https://www.dropbox.com/s/1o24vryimghp6w2/Robin%20Malhotra%27s%20r%C3%A9sum%C3%A9.pdf?dl=0"},"Grab one here")))}},157:function(e,t,a){"use strict";var n=a(158),i=a(0),o=a.n(i),s=a(4),r=a.n(s),l=a(164),c=a.n(l);a(166);function u(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,r=e.title,l=n.data.site,u=t||l.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:r},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:u},{name:"viewport",content:"width=device-width, initial-scale=1.0, viewport-fit=cover"}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:"Robin Malhotra's résumé"},u.propTypes={description:r.a.string,lang:r.a.string,meta:r.a.arrayOf(r.a.object),keywords:r.a.arrayOf(r.a.string),title:r.a.string.isRequired},t.a=u},158:function(e){e.exports={data:{site:{siteMetadata:{title:"iOS Developer",description:"Robin Malhotra's résumé",author:"@codeOfRobin"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-aad73ffeb153be5486e9.js.map