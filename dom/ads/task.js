document.addEventListener('DOMContentLoaded', function() {
	const rotators = document.querySelectorAll('.rotator');

	rotators.forEach(rotator => {
		const rotatorCases = rotator.querySelectorAll('.rotator__case');
		let caseCurrent = 0;
		let speedSlide;
		let intervalId;

		function rotate() {
			rotatorCases[caseCurrent].classList.remove('rotator__case_active');
			caseCurrent = (caseCurrent + 1) % rotatorCases.length;
			rotatorCases[caseCurrent].classList.add('rotator__case_active');
			rotatorCases[caseCurrent].style.color = rotatorCases[caseCurrent].getAttribute('data-color');
			speedSlide = +rotatorCases[caseCurrent].getAttribute('data-speed');
			if (speedSlide > 0) {
				clearInterval(intervalId);
				intervalId = setInterval(rotate, speedSlide);
			}
		}

		intervalId = setInterval(rotate, speedSlide || 1000);
	});
});