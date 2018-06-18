$("#hamburger").click(function() {
	$("#sidenav").css("right", "0");
  $("body").addClass("dark")
});
$("#close-sidenav").click(function() {
	$("#sidenav").css("right", "-260px");
  $("body").removeClass("dark");
});