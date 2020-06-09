const drop = () => {
	const fileInputs = document.querySelectorAll('[name="upload"]');
	// создвем МАССИВ событий для addEventListener перебираем и даем поведение
	['dragenter', 'dragleave', 'dragover', 'drop'].forEach((eventName) => {
		fileInputs.forEach((input) => {
			input.addEventListener(eventName, preventDefaults, false);
		});
	});
	// отключаем стандартное поведение
	function preventDefaults(e) {
		e.preventDefault();
		e.stopPropagation();
	}
	// добавляем или убираем  стили выделения при наведении
	function highlight(item) {
		item.closest('.file_upload').style.border = '5px solid yellow';
		item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, .7';
	}
	function unhighlight(item) {
		item.closest('.file_upload').style.border = 'none';
		// подгоняем цвет под рсзные формы
		if (item.closest('.calc_form')) {
			item.closest('.file_upload').style.backgroundColor = '#fff';
		} else if (item.closest('.container')) {
			item.closest('.file_upload').style.backgroundColor = '#f7e7e6';
		} else {
			item.closest('.file_upload').style.backgroundColor = '#ededed';
		}
	}

	['dragenter', 'dragover'].forEach((eventName) => {
		fileInputs.forEach((input) => {
			input.addEventListener(eventName, () => highlight(input), false);
		});
	});
	['dragleave', 'drop'].forEach((eventName) => {
		fileInputs.forEach((input) => {
			input.addEventListener(eventName, () => unhighlight(input), false);
		});
	});

	fileInputs.forEach((input) => {
		input.addEventListener('drop', (e) => {
			input.files = e.dataTransfer.files;

			// fetch.input.files // надо отправить ФАЙЛ НА СЕРВЕР. не реализовано
			// коррекция имени в выводе
			let dots; // пемеренная будет содержать '...' или вообще ничего
			const arr = input.files[0].name.split('.');
			arr[0].length > 6 ? (dots = '...') : (dots = '.');
			const name = arr[0].substring(0, 6) + dots + arr[1];
			input.previousElementSibling.textContent = name;
		});
	});
};

export default drop;
