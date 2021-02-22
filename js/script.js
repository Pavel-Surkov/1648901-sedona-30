let times = 0;
function showHide() {
	let form = document.querySelector('.search-window');
	times++;
	if(times % 2 != 0) {
		form.classList.remove('form-down');
		form.classList.add('form-up')
	}
	else {
		form.classList.remove('form-up')
		form.classList.add('form-down');
	}

}