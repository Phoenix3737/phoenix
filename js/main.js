// scroll to top on window reload //
window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}

var hotbod = document.querySelector("body");

function doStuff() {
	hotbod.className += " animate";
}

window.onload = function () {
	doStuff();
};

//animate pic and horizontal graph when scrolled into view//
var $slider = document.getElementById('slider');


$(window).load(function () {
	var in_view = new Waypoint.Inview({
		element: $('.javascript')[0],
		enter: function () {
			$('.line').addClass('start');
			$('.slide-in').addClass('start');
		},
		function() {
			var isOpen = $slider.classList.contains('slide-in');
			$slider.setAttribute('profile-pic', isOpen ? 'slide-out' : 'slide-in');
		}
	});
});

(function () {
	// Alternate Fixed & Scroll Backgrounds - by CodyHouse.co
	// toggle main navigation on mobile
	var mainNav = document.getElementsByClassName('js-main-nav')[0];
	if (mainNav) {
		mainNav.addEventListener('click', function (event) {
			if (hasClass(event.target, 'js-main-nav')) {
				var navList = mainNav.getElementsByTagName('ul')[0];
				toggleClass(navList, 'cd-main-nav__list--is-visible', !hasClass(navList, 'cd-main-nav__list--is-visible'));
			}
		});
	}

	//class manipulations - needed if classList is not supported
	function hasClass(el, className) {
		if (el.classList) return el.classList.contains(className);
		else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
	}
	function addClass(el, className) {
		var classList = className.split(' ');
		if (el.classList) el.classList.add(classList[0]);
		else if (!hasClass(el, classList[0])) el.className += " " + classList[0];
		if (classList.length > 1) addClass(el, classList.slice(1).join(' '));
	}
	function removeClass(el, className) {
		var classList = className.split(' ');
		if (el.classList) el.classList.remove(classList[0]);
		else if (hasClass(el, classList[0])) {
			var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
			el.className = el.className.replace(reg, ' ');
		}
		if (classList.length > 1) removeClass(el, classList.slice(1).join(' '));
	}
	function toggleClass(el, className, bool) {
		if (bool) addClass(el, className);
		else removeClass(el, className);
	}
})();


