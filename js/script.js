let times = 0;
function showHide() {
	const formPopup = document.querySelector('.search-window');
	times++;
	if(times % 2 != 0) {
		formPopup.classList.remove('form-down');
		formPopup.classList.add('form-up')
	}
	else {
		formPopup.classList.remove('form-up')
		formPopup.classList.add('form-down');
	}
}