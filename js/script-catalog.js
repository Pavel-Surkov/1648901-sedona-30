let pointerUp = document.querySelector('.sort-pointer-up path');
let pointerDown = document.querySelector('.sort-pointer-down path');
pointerUp.addEventListener('click', function() {
	pointerDown.classList.remove('sort-pointer-active');
	pointerUp.classList.add('sort-pointer-active');
});
pointerDown.addEventListener('click', function() {
	pointerUp.classList.remove('sort-pointer-active');
	pointerDown.classList.add('sort-pointer-active');
});