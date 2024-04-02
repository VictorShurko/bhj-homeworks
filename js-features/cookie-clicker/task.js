const clickerCount = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
const clickerSpeed = document.getElementById('clicker__speed');
let clickSpeedResult = 0;
let lastClick = Date.now();
let growing = true;

cookie.addEventListener('click', () => {
	const currentClick = Date.now();
	const difference = (currentClick - lastClick) / 1000;
	clickSpeedResult = 1 / difference;
	clickerSpeed.textContent = clickSpeedResult.toFixed(2);
	clickerCount.textContent = ++clickerCount.textContent;
	cookie.style.width = growing ? `${cookie.clientWidth + 20}px` : `${cookie.clientWidth - 20}px`;
	growing = !growing;
	lastClick = currentClick;
});
