var Summit=function(){"use strict";var n={init:[]},t=function(t){if(console.log("Initializing DevCon Summit 2017..."),n.init.length>0)for(var e=0;e<n.init.length;e++)n.init[e]();n.Nav.load(),n.Hero.load(),n.WhyAttend.load(),n.Speakers.load(),n.Agenda.load(),n.Venue.load(),n.Tickets.load(),n.Faqs.load(),n.Sponsors.load()},e=function(t,e){return n[t]=e(n),n};return{initModule:t,extend:e}}();Summit.extend("Agenda",function(n){var t={componentString:"Agenda",enableAgenda:!0},e=function(){n.Model.getAgenda(o,a)},o=function(n){var e=$("#agenda");$(e).html(SummitHandle.templates.agenda({data:n,enableAgenda:t.enableAgenda}))},a=function(n){var e=t.componentString;console.log("error occured on "+e)},i=function(){$("#agenda")},r=function(n){e(),i()};return{load:r}}),Summit.extend("Faqs",function(n){var t=function(){var n=$("#faqs");$(n).html(SummitHandle.templates.faqs)},e=function(){$("#faqs")},o=function(n){t(),e()};return{load:o}}),Summit.extend("Hero",function(n){var t=function(){var t=$("#hero");$(t).html(SummitHandle.templates.hero),n.Nav.scrollToSection("hero")},e=function(n){for(var t=0,e=0;n&&!isNaN(n.offsetLeft)&&!isNaN(n.offsetTop);)t+=n.offsetLeft-n.scrollLeft,e+=n.offsetTop-n.scrollTop,n=n.offsetParent;return{top:e,left:t}},o=function(n){var t=$(".prlx-item");$(t).each(function(o,a){var i,r,c,s=e(t[o]).left+t[o].offsetWidth/2,u=e(t[o]).top+t[o].offsetHeight/2;n=n||window.event,null==n.pageX&&null!=n.clientX&&(i=n.target&&n.target.ownerDocument||document,r=i.documentElement,c=i.body,n.pageX=n.clientX+(r&&r.scrollLeft||c&&c.scrollLeft||0)-(r&&r.clientLeft||c&&c.clientLeft||0),n.pageY=n.clientY+(r&&r.scrollTop||c&&c.scrollTop||0)-(r&&r.clientTop||c&&c.clientTop||0));var l=.2*(o+1);$(t[o]).attr("style","transform: translate3d("+(n.pageX-s)*l+"px, "+(n.pageY-u)*l+"px, 0px)")})},a=function(){$("body").css("overflow",""),$("nav").css("opacity","0").removeClass("hidden"),$("#hero").css("overflow","hidden"),setTimeout(function(){$(".hero-enter").css("opacity","0")},300),setTimeout(function(){$(".hero-enter").addClass("hidden"),$("nav").css("opacity","1"),n.Nav.scrollToSection("whyattend")},500)},i=function(){var n=$("#hero");$(".prlx-wrapper");n.on("mousemove",".page-inner",function(n){o(n)}),n.on("click",".hero-enter",function(){a()})},r=function(n){t(),i()};return{load:r}}),Summit.extend("Model",function(n){var t={appName:"Summit",url:"data/"},e=function(n,e){var o=window.location.pathname+t.url;$.ajax({url:o+"nav.json?a="+Math.random(),type:"GET",dataType:"json",success:function(t){"function"==typeof n&&n(t)},error:function(n){"function"==typeof e&&e(n)}})},o=function(n,e){var o=window.location.pathname+t.url;$.ajax({url:o+"whyattend.json?a="+Math.random(),type:"GET",dataType:"json",success:function(t){"function"==typeof n&&n(t)},error:function(n){"function"==typeof e&&e(n)}})},a=function(n,e){var o=window.location.pathname+t.url;$.ajax({url:o+"speakers.json?a="+Math.random(),type:"GET",dataType:"json",success:function(t){"function"==typeof n&&n(t)},error:function(n){"function"==typeof e&&e(n)}})},i=function(n,e){var o=window.location.pathname+t.url;$.ajax({url:o+"agenda.json?a="+Math.random(),type:"GET",dataType:"json",success:function(t){"function"==typeof n&&n(t)},error:function(n){"function"==typeof e&&e(n)}})},r=function(n,e){var o=window.location.pathname+t.url;$.ajax({url:o+"venue.json?a="+Math.random(),type:"GET",dataType:"json",success:function(t){"function"==typeof n&&n(t)},error:function(n){"function"==typeof e&&e(n)}})},c=function(n,e){var o=window.location.pathname+t.url;$.ajax({url:o+"tickets.json?a="+Math.random(),type:"GET",dataType:"json",success:function(t){"function"==typeof n&&n(t)},error:function(n){"function"==typeof e&&e(n)}})};return $.extend(t,{getMenu:e,getReasons:o,getSpeakers:a,getAgenda:i,getVenue:r,getEventbrite:c},!0)}),Summit.extend("Nav",function(n){var t={componentString:"Navigation"},e=function(){$("nav");n.Model.getMenu(o,i)},o=function(n){var t=$("nav");$(t).html(SummitHandle.templates.nav({data:n}))},a=function(t){var e=($("nav"),20);$("#modal").hasClass("active")?(n.Speakers.closeModal(),setTimeout(function(){$("html, body").animate({scrollTop:$("#"+t).offset().top+e},500)},1010)):$("html, body").animate({scrollTop:$("#"+t).offset().top+e},500)},i=function(n){var e=t.componentString;console.log("error occured on "+e)},r=function(){var n=$("nav");n.on("click",".nav-item",function(n){a($(this).data("href"))}),n.on("click",".brand-wrapper",function(n){a("hero")})},c=function(n){e(),r()};return{load:c,scrollToSection:a}}),Summit.extend("Speakers",function(n){var t={componentString:"Speakers"},e={speakers:{}},o=function(){n.Model.getSpeakers(a,c)},a=function(n){var t=$("#speakers");e.speakers=n,$(t).html(SummitHandle.templates.speakers({data:n}))},i=function(n){var t=$("#modal"),o=e.speakers,a=o.filter(function(t){return t.key==n});a?($(t).html(SummitHandle.templates.modal({data:a[0],module:"speaker"})),$(t).addClass("active"),$("body").css("overflow","hidden")):console.log("Speaker #"+n+" does not exists.")},r=function(n){var t=$("#modal");setTimeout(function(){$(".speaker-infos h4").css("opacity","0"),$(".speaker-infos .more-details").css("opacity","0"),$("#modal .btn-close").css("display","none")},100),setTimeout(function(){$(".speaker-infos").css("width","0%"),$(".speaker-infos").css("padding","0px"),$(".speaker-img").css("width","100%"),$(".modal-wrapper").css({width:"28vw",height:"50vh"})},300),setTimeout(function(){$(".speaker-modal").css("opacity","0")},800),setTimeout(function(){$(t).html("").removeClass("active"),$(t).find(".btn-close").css("display","block"),$("body").css("overflow","")},1e3)},c=function(n){var e=t.componentString;console.log("error occured on "+e)},s=function(){var n=$("#speakers"),t=$("#modal");n.on("click",".speaker-item",function(){$(this).hasClass("speaker-last")?window.open($(this).find("span").data("href"),"_blank"):i($(this).data("id"))}),t.on("click",".btn-close",function(){r($(this).data("id"))})},u=function(n){o(),s()};return{load:u,data:e.speakers,closeModal:r}}),Summit.extend("Sponsors",function(n){var t=function(){var n=$("#sponsors");$(n).html(SummitHandle.templates.sponsors)},e=function(){$("#sponsors")},o=function(n){t(),e()};return{load:o}}),Summit.extend("Tickets",function(n){var t={componentString:"Tickets",enableEventbrite:!0},e=function(){n.Model.getEventbrite(o,a)},o=function(n){var e=$("#tickets");$(e).html(SummitHandle.templates.tickets({data:n,enableEventbrite:t.enableEventbrite}))},a=function(n){var e=t.componentString;console.log("error occured on "+e)},i=function(){$("#tickets")},r=function(n){e(),i()};return{load:r}}),Summit.extend("Venue",function(n){var t=function(){var n=$("#venue");$(n).html(SummitHandle.templates.venue)},e=function(){$("#venue")},o=function(n){t(),e()};return{load:o}}),Summit.extend("WhyAttend",function(n){var t={componentString:"Why Attend"},e=function(){n.Model.getReasons(o,i)},o=function(n){var t=$("#whyattend");$(t).html(SummitHandle.templates.whyattend({data:n})),setTimeout(function(){$(t).find('.reason-item[data-target="tech"]').addClass("active"),$(t).find('.whyattend-inner[data-reason="tech"]').addClass("active")},200)},a=function(n){var t=$("#whyattend"),e=$(t).find(".whyattend-wrapper"),o=$(t).find(".reason-list"),a=$(n).data("target");$(o).find(".reason-item").removeClass("active"),$(o).find('.reason-item[data-target="'+a+'"]').addClass("active"),$(e).find(".whyattend-inner").removeClass("active"),$(e).find('.whyattend-inner[data-reason="'+a+'"]').addClass("active")},i=function(n){var e=t.componentString;console.log("error occured on "+e)},r=function(){var n=$("#whyattend");n.on("click",".reason-item",function(){a($(this))})},c=function(n){e(),r()};return{load:c}});