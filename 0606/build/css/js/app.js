/*! 樱花-专题-扫码 -Panli代购 v 0.0.1  | (c) Tue Jun 06 2017 15:16:20 GMT+0800 (中国标准时间)  Julian  | https://github.com/panli-com/special-2017-cn#readme  518 */
function floorNnav(){var o=$(window).width(),n=$(".sp-main").offset().left,f=$(".floor-nav").width();if(o>=1444){var l=n-f-15;$(".floor-nav").css("left",l)}else $(".floor-nav").css({left:"10px",right:""})}function goTofloorC(o){var n=$("#floor-"+o).offset().top;$("body,html").animate({scrollTop:n-14},300)}!function(){$(function(){$(".floor-nav").on("click","li",function(){var o=$(this),n=o.attr("floor");goTofloorC(n)}),$(".back-top").on("click",function(){$("body,html").animate({scrollTop:0},300)}),$("#sp-close-tip").on("click",function(){$(".sp-tip").hide()}),floorNnav()}),$(window).resize(function(){floorNnav()}),$(window).scroll(function(){var o=$(window).scrollTop(),n=o,f=$(".footer").offset().top-700;o>400&&n<f?$(".floor-nav").show():$(".floor-nav").hide()})}();