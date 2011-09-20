$(document).ready(function(){
  $("ul li a").mouseup(function(){
    $(this).removeClass("clickstate");
    $(this).children(".sub").removeClass("visible");
    }).mousedown(function(){
      $(this).addClass("clickstate");
      $(this).children(".sub").addClass("visible");
     });
});