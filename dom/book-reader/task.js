document.addEventListener('DOMContentLoaded', function() {
	const fontSizes = document.querySelectorAll('.font-size');
	const book = document.getElementById('book');

	fontSizes.forEach(fontSize => {
		fontSize.addEventListener('click', function(e) {
			e.preventDefault();
			fontSizes.forEach(function(el) {
				el.classList.remove('font-size_active');
			});
			this.classList.add('font-size_active');
			let size = this.getAttribute('data-size');
			book.classList.remove('book_fs-big', 'book_fs-small');
			book.classList.add('book_fs-' + size);
		});
	});
});