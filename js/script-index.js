const formPopup = document.querySelector('.form-wrapper');

const dateFrom = formPopup.querySelector('.arrival-date-input');
const dateTo = formPopup.querySelector('.departure-date-input');
const adults = formPopup.querySelector('.adults-count-input');
const kids = formPopup.querySelector('.kids-count-input');

//управляет анимацией выезда формы

let times = 0;
function showHide() {
	times++;
	if(times % 2 != 0) {
		formPopup.classList.remove('form-down');
		formPopup.classList.add('form-up');
	}
	else {
		formPopup.classList.remove('form-up');
		formPopup.classList.add('form-down');
	}
}

window.onload = function fillLowerFields() {
	adults.value = localStorage.getItem('adults');
	kids.value = localStorage.getItem('kids');
}

//Проверяет поля на заполненность. localStorage сохраняет количество взрослых и детей

formPopup.addEventListener('submit', function(event) {
	if(!dateFrom.value || !dateTo.value || !adults.value || !kids.value) {
		event.preventDefault();
		alert('Нужно заполнить все поля!');
	} else {
		localStorage.setItem('adults', adults.value);
		localStorage.setItem('kids', kids.value);
	}
})
