const container = document.querySelector('.content');

container.addEventListener('click', function(e) {
	const targetDropdown = e.target.closest('.dropdown');
	if (!targetDropdown) return;

	const button = targetDropdown.querySelector('.dropdown__value');
	const list = targetDropdown.querySelector('.dropdown__list');

	if (e.target === button) {
		list.classList.toggle('dropdown__list_active');
	} else if (e.target.classList.contains('dropdown__link')) {
		e.preventDefault();
		button.textContent = e.target.textContent;
		list.classList.remove('dropdown__list_active');
	}
});