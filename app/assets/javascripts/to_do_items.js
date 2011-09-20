$(document).ready(function(){
  $("ul li").mouseup(function(){
    $(this).children("a.item").removeClass("clickstate");
    $(this).children("a.sub").removeClass("visible");
    }).mousedown(function(){
      $(this).children("a.item").addClass("clickstate");
      $(this).children("a.sub").addClass("visible");
     });
});