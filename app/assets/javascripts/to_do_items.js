$(document).ready(function(){
  $("ul li a").mouseup(function(){$(this).removeClass("clickstate");}).mousedown(function(){$(this).addClass("clickstate");});
});