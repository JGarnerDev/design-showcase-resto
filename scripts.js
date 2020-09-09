$(function () {
	$(".hamburger-menu").on("click", () => {
		$(".toggle").toggleClass("open");
		$(".nav-list").toggleClass("open");
	});
});
