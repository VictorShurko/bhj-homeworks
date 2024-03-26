let timer = document.getElementById('timer');
let timerNum = Number(document.getElementById('timer').textContent);
let fileUrl = document.getElementById('file').href;
const toTimeString = (timerNum) => new Date(timerNum * 1000).toISOString().substr(11, 8);

let intervalId = setInterval(() => {
	timerNum--;
	timer.textContent = toTimeString(timerNum);
	if (timerNum <= 0) {
		clearInterval(intervalId);
		window.location.assign(fileUrl);
		alert('Вы победили в конкурсе!');
	}
}, 1000);
