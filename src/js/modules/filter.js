const filter = (filterMenu, filterBlock, filterNo) => {
	const menu = document.querySelector(filterMenu),
		items = menu.querySelectorAll('li'),
		images = document.querySelectorAll(filterBlock),
		no = document.querySelector(filterNo);

	no.style.display = 'none';
	no.classList.remove('animated', 'fadeIn');

	items.forEach((item) => {
		item.addEventListener('click', (e) => {
			let targetClass = e.target.classList;

			let imageLength = [];
			if (!targetClass.contains('active')) {
				images.forEach((image) => {
					image.style.display = 'none';
					image.classList.remove('animated', 'fadeIn');

					if (image.classList.contains(targetClass.value)) {
						image.style.display = 'block';
						no.style.display = 'none';
						image.classList.add('animated', 'fadeIn');
						no.classList.remove('animated', 'fadeIn');
						// * записываем в переменную на каждой итерации цикла
						imageLength.push(image);
					} 
					// * если длинна массива совпадений 0, выводим блок с текстом
					if (imageLength.length == 0) {
						no.style.display = 'block';
						no.classList.add('animated', 'fadeIn');
					}
				});
			}
		});
	});

	// Если пользователь кликнул на определенны элемень, убираем класс active у всех остальных
	menu.addEventListener('click', (e) => {
		let target = e.target;
		if (target && target.tagName == 'LI') {
			items.forEach((btn) => btn.classList.remove('active'));
			target.classList.add('active');
		}
	});
};

export default filter;
