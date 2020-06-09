const filter = () => {
	const menu = document.querySelector('.portfolio-menu'),
		item = menu.querySelectorAll('li'),
		btnAll = menu.querySelector('.all'),
		btnLovers = menu.querySelector('.lovers'),
		btnChef = menu.querySelector('.chef'),
		btnGirl = menu.querySelector('.girl'),
		btnGuy = menu.querySelector('.guy'),
		btnGrandmother = menu.querySelector('.grandmother'),
		btnGranddad = menu.querySelector('.granddad'),
		wrapper = document.querySelector('.portfolio-wrapper'),
		markAll = wrapper.querySelectorAll('.all'),
		markLovers = wrapper.querySelectorAll('.lovers'),
		markChef = wrapper.querySelectorAll('.chef'),
		markGirl = wrapper.querySelectorAll('.girl'),
		markGuy = wrapper.querySelectorAll('.guy'),
		no = document.querySelector('.portfolio-no');

	// Устанавливаем правила для фильтра: markAll и no
	const typeFilter = (markType) => {
		markAll.forEach((mark) => {
			mark.style.display = 'none';
			mark.classList.remove('animated', 'fadeIn');
		});

		no.style.display = 'none';
		no.classList.remove('animated', 'fadeIn');

		if (markType) {
			markType.forEach((mark) => {
				mark.style.display = 'block';
				mark.classList.add('animated', 'fadeIn');
			});
		} else {
			no.style.display = 'block';
			no.classList.add('animated', 'fadeIn');
		}
	};
	// передаем в функцию слассы для фильтра
	let filterAll = (btn, mark) => {
		btn.addEventListener('click', () => typeFilter(mark));
	};

	filterAll(btnAll, markAll);
	filterAll(btnLovers, markLovers);
	filterAll(btnChef, markChef);
	filterAll(btnGirl, markGirl);
	filterAll(btnGuy, markGuy);
	filterAll(btnGrandmother);
	filterAll(btnGranddad);

	menu.addEventListener('click', (e) => {
		let target = e.target;
		// Если пользователь кликнул на определенн кнопку, убираем класс active у всех остальных
		if (target && target.tagName == 'LI') {
			item.forEach((btn) => btn.classList.remove('active'));
			target.classList.add('active');
		}
	});
};

export default filter;
