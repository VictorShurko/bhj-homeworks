const burrows = document.querySelectorAll('.hole');
let dead = 0;
let lost = 0;

function check() {
	if (dead >= 10) {
		alert('Победа!');
		reset()
	} else if (lost >= 5) {
		alert('Поражение :(');
		reset()
	}
}

function reset() {
	dead = 0;
	lost = 0;
	document.getElementById('dead').textContent = dead;
	document.getElementById('lost').textContent = lost;
}

burrows.forEach(function(hole) {
	hole.addEventListener('click', () => {
		if (hole.classList.contains('hole_has-mole')) {
			dead++;
			document.getElementById('dead').textContent = dead;
		} else {
			lost++;
			document.getElementById('lost').textContent = lost;
		}
		check()
	})
});

