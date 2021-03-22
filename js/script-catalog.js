function sort(active) {
	document.querySelectorAll('.sort-pointer').forEach( function(item) {
		item.classList.remove('sort-pointer-active');
	});
	active.classList.add('sort-pointer-active');
}