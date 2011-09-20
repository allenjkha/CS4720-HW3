$(document).ready(function(){
  $("ul li").mouseup(function(){$(this).removeClass("clickstate");}).mousedown(function(){$(this).addClass("clickstate");});
});