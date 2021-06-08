function sort(active) {
	document.querySelectorAll('.sort-pointer').forEach( function(item) {
		item.classList.remove('sort-pointer-active');
	});
	active.classList.add('sort-pointer-active');
}

document.addEventListener('pointerdown', event => {
	const leftToggle = document.querySelector('.toggle-min');
	const rightToggle = document.querySelector('.toggle-max');
	const scale = document.querySelector('.range-controls');
	const from = document.querySelector('#from');
	const to = document.querySelector('#to');
	let target = event.target;
	event.preventDefault();
	
	const shiftX = Math.floor(event.clientX - event.target.getBoundingClientRect().left);
	target.setPointerCapture(event.pointerId);

	if(target == leftToggle) {
		document.addEventListener('pointermove', onMove);
		document.addEventListener('pointerup', cancel);

		function cancel() {
			document.removeEventListener('pointerup', cancel);
			document.removeEventListener('pointermove', onMove);
		};

		function onMove(event) {
      let newLeft = Math.floor(event.clientX) - shiftX - Math.floor(scale.getBoundingClientRect().left);

      if(newLeft < 0) {
				newLeft = 0;
			} else if(newLeft > rightToggle.offsetLeft - rightToggle.offsetWidth) {
				newLeft = rightToggle.offsetLeft - rightToggle.offsetWidth;
			}

    	target.style.left = newLeft + 'px';
			from.value = 'ОТ ' + newLeft * 15;
		};
	} else if(target == rightToggle) {
		document.addEventListener('pointermove', onMove);
		document.addEventListener('pointerup', cancel);

		function onMove(event) {
			let newLeft = Math.floor(event.clientX) - shiftX - Math.floor(scale.getBoundingClientRect().left);

      if(newLeft < leftToggle.offsetLeft + leftToggle.offsetWidth) {
				newLeft = leftToggle.offsetLeft + leftToggle.offsetWidth;
			} else if(newLeft > scale.offsetWidth - target.offsetWidth) {
				newLeft = scale.offsetWidth - target.offsetWidth;
			}
    	target.style.left = newLeft + 'px';
			to.value = 'ДО '+ newLeft * 15;
		};
		
		function cancel() {
			document.removeEventListener('pointerup', cancel);
			document.removeEventListener('pointermove', onMove);
		};
	}
});
