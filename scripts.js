$(function () {
	$(".hamburger-menu").on("click", () => {
		$(".toggle").toggleClass("open");
		$(".nav-list").toggleClass("open");
	});
	$(".nav-item").on("click", () => {
		$(".toggle").toggleClass("open");
		$(".nav-list").toggleClass("open");
	});

	AOS.init({
		easing: "ease",
		duration: 1000,
	});
});
