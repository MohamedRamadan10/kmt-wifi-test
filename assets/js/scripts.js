$(() => {
	$(".sidebar").theiaStickySidebar({
		additionalMarginTop: 30,
	});

	$(".menu__btn").click(function () {
		$(".menu .links").toggleClass("active");
	});
});
