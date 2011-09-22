$(document).ready(function(){
  $("ul li").mouseup(function(){$(this).children(".item").removeClass("clickstate");}).mousedown(function(){$(this).children(".item").addClass("clickstate");});
  $("ul li").mouseout(function(){$(this).children("div").children("a.sub").removeClass("visible");}).mouseover(function(){$(this).children("div").children("a.sub").addClass("visible");});
  $("#add").click(function(){
  	if ($(this).hasClass("top")) {
  		$(this).animate({"top": "-=100px"}, "slow").removeClass("top").addClass("bottom");
  	}
  	else if ($(this).hasClass("bottom")) {
  		$(this).animate({"top": "+=100px"}, "slow").removeClass("bottom").addClass("top");
  	} else {}
  });
});