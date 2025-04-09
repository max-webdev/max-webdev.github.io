document.addEventListener('DOMContentLoaded', () => {
	const burgers = document.querySelectorAll('.nav__burger');
	const navLists = document.querySelectorAll('.nav__list');

	burgers.forEach((burger, index) => {
		burger.addEventListener('click', () => {
			burger.classList.toggle('active');
			navLists[index].classList.toggle('active');

			if (navLists[index].classList.contains('active')) {
				document.body.classList.add('no-scroll');
			} else {
				document.body.classList.remove('no-scroll');
			}
		});
	});
});
