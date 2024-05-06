function toggleClass() {
	document.querySelectorAll('.reveal').forEach(function(el) {
		let elementPosition = el.getBoundingClientRect();

		if (elementPosition.top <= window.innerHeight && elementPosition.bottom >= 0) {
			el.classList.add('reveal_active');
		} else {
			el.classList.remove('reveal_active');
		}
	});
}

window.addEventListener('scroll', toggleClass);

document.addEventListener('DOMContentLoaded', toggleClass);