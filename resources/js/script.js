$(document).ready(()=>{$(".js--section-features").waypoint(function(a){"down"===a?($("nav").addClass("sticky"),$(".top-up").fadeIn(1e3)):($("nav").removeClass("sticky"),$(".top-up").fadeOut(100))},{offset:"60px"}),$("#hungry").click(()=>{$("html, body").animate({scrollTop:$(".js--section-plans").offset().top},1e3)}),$("#show-me").click(()=>{$("html, body").animate({scrollTop:$(".js--section-features").offset().top},1e3)}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(a){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);(t=t.length?t:$("[name="+this.hash.slice(1)+"]")).length&&(a.preventDefault(),$("html, body").animate({scrollTop:t.offset().top},1e3,function(){var a=$(t);if(a.focus(),a.is(":focus"))return!1;a.attr("tabindex","-1"),a.focus()}))}}),$(".js--wp-1").waypoint(a=>{$(".js--wp-1").addClass("animated fadeIn")},{offset:"50%"}),$(".js--wp-2").waypoint(a=>{$(".js--wp-2").addClass("animated fadeInUp")},{offset:"50%"}),$(".js--wp-3").waypoint(a=>{$(".js--wp-3").addClass("animated fadeIn")},{offset:"50%"}),$(".js--wp-4").waypoint(a=>{$(".js--wp-4").addClass("animated pulse")},{offset:"50%"}),$(".js--nav-icon").click(()=>{let a=$(".main-nav");$(".js-nav-icon");a.slideToggle(200)})});