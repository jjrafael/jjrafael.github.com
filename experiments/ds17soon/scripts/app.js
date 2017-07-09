var SummitSoon=function(){"use strict";var t={init:[]},e=function(e){if(console.log("Initializing DevCon Summit 2017 Coming Soon..."),t.$container=e,t.init.length>0)for(var n=0;n<t.init.length;n++)t.init[n]();t.Soon.load()},n=function(e,n){return t[e]=n(t),t};return{initModule:e,extend:n}}();SummitSoon.extend("Soon",function(t){function e(t){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)}var n=function(){var t=$("#soon");$(t).html(SummitHandle.templates.soon)},r=function(t){var t=t?t:".email",e=$(t).closest("form");""===$(t).val().trim()&&$(e).addClass("active")},s=function(){""===$(".email").val().trim()&&($(".email").val(""),$("form").removeClass("active"))},i=function(t){var e=$("form");"email is invalid"===t?($(e).removeClass("active").addClass("loading").addClass("error"),$(e).find(".btn-submit").text(t),setTimeout(function(){$(e).removeClass("loading").addClass("active").removeClass("error"),$(e).find(".btn-submit").text("GO!")},2e3)):($(e).removeClass("active").addClass("loading"),$(e).find(".btn-submit").text(t),setTimeout(function(){$(e).addClass("success"),$(e).find(".btn-submit").text("We'll notify you soon!")},3e3))},a=function(){var t=$(".email").val(),n="loading";""!==t.trim()&&(n=e(t)?"processing":"email is invalid",i(n))},o=function(){var t=$(".planet-wrap");$(t).addClass("active"),setTimeout(function(){$(t).css("width","100%"),$(t).css("height","100%"),$(t).css("margin-top","0px"),$(t).css("top","0px"),$(t).css("left","0px"),$(t).find(".planet-img").css("opacity","0"),$(".email-wrapper").css("display","none"),$(".video-content").css("display","flex"),$(".video-content").fadeIn()},200),setTimeout(function(){$(t).css("border-radius","0px"),$(t).find(".btn-watch").css("margin-top","10px"),$(t).find(".btn-watch").css("left","10px"),$(t).find(".btn-watch").css("z-index","9"),$(t).find(".btn-watch").text("back")},400)};closeVideoModal=function(){var t=$(".planet-wrap");$(t).removeClass("active"),setTimeout(function(){$(t).find(".btn-watch").css("margin-top","100px"),$(t).find(".btn-watch").css("left","calc(50% - 70px)"),$(t).find(".btn-watch").text("watch highlights"),$(t).css("border-radius","400px"),$(".email-wrapper").css("display","block"),$(".video-content").css("display","none"),$(".video-content").fadeOut()},250),setTimeout(function(){$(t).css("width","400px"),$(t).css("height","400px"),$(t).css("margin-top","100px"),$(t).css("top","calc(50%)"),$(t).css("left","calc(50% - 200px)"),$(t).find(".planet-img").css("opacity","1")},450)};var l=function(){var t=$("#soon");t.on("click",".email",function(){r(this)}),$("body").on("click",function(t){if($("form").hasClass("active")){if("email-wrapper"==t.target.className)return;if($(t.target).closest(".email-wrapper").length)return}s()}),t.on("click",".btn-submit",function(){$(this).closest("form").hasClass("success")||a()}),t.on("click",".btn-watch",function(){$(".planet-wrap").hasClass("active")?closeVideoModal():o()})},c=function(t){n(),l()};return{load:c}}),SummitSoon.initModule($("body")),Handlebars.registerHelper("consoleLog",function(t){console.log(t)}),Handlebars.registerHelper("toDateString",function(t){return t=t?moment(t).format("MMMM DD, YYYY  -  h:mm A"):"--"}),Handlebars.registerHelper("toDateStringTimeOnly",function(t){return t=t?moment(t).format("h:mm A"):"--"}),Handlebars.registerHelper("toDateStringNotime",function(t){return t=t?moment(t).format("MMMM DD, YYYY"):"--"}),Handlebars.registerHelper("dashNull",function(t){return t=null===t?"--":t}),Handlebars.registerHelper("strYN",function(t){return t=t?"Yes":"No"}),Handlebars.registerHelper("count",function(t){return t.length}),Handlebars.registerHelper("notEmpty",function(t){return 0!==t.length}),Handlebars.registerHelper("ifCond",function(t,e,n,r){"use strict";"function"==typeof t&&(t=t()),"function"==typeof n&&(n=n());var s=!1;switch(e){case"==":case"===":s=t===n;break;case"!=":case"!==":s=t!==n;break;case"<":s=t<n;break;case"<=":s=t<=n;break;case">":s=t>n;break;case">=":s=t>=n;break;case"&&":s=t&&n;break;case"||":s=t||n;break;default:s=!1}return s?r.fn(this):r.inverse(this)}),Handlebars.registerHelper("ifNotOne",function(t,e){return"1"===t?e.fn(this):e.inverse(this)}),Handlebars.registerHelper("toTrimUnderscores",function(t){return t=t?t.split("_").join(" ").toLowerCase():""}),Handlebars.registerHelper("chkPeriod",function(t){return t=t?t.indexOf("/*")>-1?t=t.split("/*")[0]:t:"--"}),Handlebars.registerHelper("sortByProps",function(t,e){"use strict";var n=t.sort(function(t,n){if(t[e])return t[e].toLowerCase().localeCompare(n[e].toLowerCase())});return n}),Handlebars.registerHelper("sortByProps2",function(t,e){"use strict";var n=t.sort(function(t,e){if(t.contentTemplate.name)return t.contentTemplate.name.toLowerCase().localeCompare(e.contentTemplate.name.toLowerCase())});return n}),Handlebars.registerHelper("stringToArray",function(t){"use strict";return t.split(",")}),Handlebars.registerHelper("parseStringToHTML",function(t){"use strict";return new Handlebars.SafeString(t)}),this.SummitHandle=this.SummitHandle||{},this.SummitHandle.templates=this.SummitHandle.templates||{},this.SummitHandle.templates.soon=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,n,r){return'<div class="page-inner">\r\n\t<div class="brand">\r\n\t\t<img class="logo" src="assets/img/logo.png"></img>\r\n\t\t<h1>Biggest Developers Conference in the Philippines</h1>\r\n\t</div>\r\n\r\n\t<div class="email-wrapper">\r\n\t\t<form>\r\n\t\t\t<input type="email" class="email" placeholder="Add your email to notify!"></input>\r\n\t\t\t<div class="btn btn-submit">Go!</div>\r\n\t\t</form>\r\n\t</div>\r\n\r\n\t<div class="astro-wrapper">\r\n\t\t<div class="orbit-wrap"></div>\r\n\t\t<div class="orbit-wrap two"></div>\r\n\t\t<div class="planet-wrap">\r\n\t\t\t<img class="planet-img" src="assets/img/planet1.jpg"/>\r\n\t\t\t<button class="btn btn-watch btn-primary">Watch Highlights</button>\r\n\t\t</div>\r\n\t\t<div class="video-content">\r\n\t\t\t<div class="video-highlight">\r\n\t\t\t\t<h1>2016 Highlights</h1>\r\n\t\t\t\t<div class="day-one">\r\n\t\t\t\t\t<h1>Day One</h1>\r\n\t\t\t\t\t<iframe class="youtube-player" type="text/html" width="450px" height="250px" src="https://www.youtube.com/embed/q-4HoUipLPg?autoplay=0&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="day-two">\r\n\t\t\t\t\t<h1>Day Two</h1>\r\n\t\t\t\t\t<iframe class="youtube-player" type="text/html"  width="450px" height="250px" src="https://www.youtube.com/embed/kMt1WfHlkJ0?autoplay=0&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<button class="btn btn-speakers">Calling for Speakers</button>\r\n\t\t<button class="btn btn-sponsors">Calling for Sponsors</button>\r\n\t</div>\r\n</div>\r\n'},useData:!0});