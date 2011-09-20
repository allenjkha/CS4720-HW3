$(document).ready(function(){
  $("ul li").mouseup(function(){
    $(this).children(".item").removeClass("clickstate");
    $(this).children(".sub").removeClass("visible");
    }).mousedown(function(){
      $(this).children(".item").addClass("clickstate");
      $(this).children(".sub").addClass("visible");
     });
});