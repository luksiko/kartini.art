const changeModalState = (state) => {
	let size = document.querySelectorAll('#size'),
		material = document.querySelectorAll('#material'),
		options = document.querySelectorAll('#options'),
		promocode = document.querySelectorAll('.promocode');

	// функция для добавления данных с всех форм в переменную changeModal
	function bindActionsToEvents(event, elem, prop) {
		elem.forEach((item, i) => {
			item.addEventListener(event, () => {
				// точно определяем в какой элемент кликнул пользователь
				switch (item.nodeName) {
					case 'SPAN':
						state[prop] = i;
						break;
					case 'INPUT':
						if (item.getAttribute('type') === 'checkbox') {
							i === 0 ? (state[prop] = 'Холодное') : (state[prop] = 'Тёплое');
							//очищать все чекбоксы кроме чекнутого
							elem.forEach((box, j) => {
								box.checked = false;
								if (i == j) {
									box.checked = true;
								}
							});
							//
						} else {
							state[prop] = item.value; // добавляем свойство обьекта с именем prop
						}
						break;
					case 'SELECT':
						state[prop] = item.value;
						break;
				}
				console.log(state);
			});
		});
	}
	bindActionsToEvents('change', size, 'size');
	bindActionsToEvents('change', material, 'material');
	bindActionsToEvents('change', options, 'options');
	bindActionsToEvents('input', promocode, 'promocode');

	size.values = '';
	material.values = '';
	options.keys = '';
	promocode.keys = '';
};

export default changeModalState;
