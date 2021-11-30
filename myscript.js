// Menu Background color change while scrolling

$(function () {
	$(document).scroll( function () {
		var $nav = $('.nav');
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

// Menu bar hide/show toggle 
var menu = document.getElementById('bar');
var itmes = document.getElementById('navbar');

 itmes.style.right = "-360px";

menu.onclick = function () {
	if (itmes.style.right == "-360px") {
		itmes.style.right = "0";
	}else{
		itmes.style.right = "-360px";
	}
}
