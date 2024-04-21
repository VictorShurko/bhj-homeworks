document.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('.tabs').forEach(function(tabGroup) {
		tabGroup.addEventListener('click', function(event) {
			const clickedTab = event.target.closest('.tab');
			if (!clickedTab) return;

			const tabs = tabGroup.querySelectorAll('.tab');
			const tabContents = tabGroup.querySelectorAll('.tab__content');
			const clickedTabIndex = Array.from(tabs).indexOf(clickedTab);

			tabs.forEach(function(tab) {
				tab.classList.toggle('tab_active', tab === clickedTab);
			});

			tabContents.forEach(function(content, index) {
				content.classList.toggle('tab__content_active', index === clickedTabIndex);
			});
		});
	});
});