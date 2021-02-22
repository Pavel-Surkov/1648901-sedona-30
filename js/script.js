let times = 0;
function showHide() {
	let form = document.querySelector('.search-window');
	times++;
	if(times % 2 != 0) 
		form.classList.add('hidden');
	else 
		form.classList.remove('hidden');
}