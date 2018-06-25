$("#hamburger").click(function() {
	$("#sidenav").css("right", "0");
  $("body").addClass("dark");
  $("img").css("opacity","0.5");
});
$("#close-sidenav").click(function() {
	$("#sidenav").css("right", "-260px");
  $("body").removeClass("dark");
  $("img").css("opacity","1");
});
$('.carousel').carousel({
  interval: 4000
});
$(".back").on("click",function(){
  window.history.back();
})