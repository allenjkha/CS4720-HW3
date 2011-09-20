$(document).ready(function(){
  $("ul li").mouseup(function(){$(this).children(".item").removeClass("clickstate");}).mousedown(function(){$(this).children(".item").addClass("clickstate");});
  $("ul li").mouseout(function(){$(this).children("div").children("a.sub").removeClass("visible");}).mouseover(function(){$(this).children("div").children("a.sub").addClass("visible");});
});