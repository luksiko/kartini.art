import { postData } from '../services/requests';

const forms = (state) => {
	const form = document.querySelectorAll('form'),
		inputs = document.querySelectorAll('input'),
		upload = document.querySelectorAll('[name="upload"]');

	// checkNumInputs('input[name="user_phone"]');

	const message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...',
		spinner: 'assets/img/spinner.gif',
		ok: 'assets/img/ok.png',
		fail: 'assets/img/fail.png',
	};

	const path = {
		designer: 'assets/server.php',
		question: 'assets/question.php',
	};

	const clearInputs = () => {
		inputs.forEach((item) => {
			item.value = '';
		});
		upload.forEach((item) => {
			item.previousElementSibling.textContent = 'Файл не выбран';
		});
	};
	// ЗАГРУЗКА ФАЙЛА
	upload.forEach((item) => {
		item.addEventListener('input', () => {
			console.log(item.files[0]); // свойства загруженного файла
			// обрезка имени файла до "name12...jpg"
			let dots; // пемеренная будет содержать '...' или вообще ничего
			const arr = item.files[0].name.split('.');
			arr[0].length > 6 ? (dots = '...') : (dots = '.');
			const name = arr[0].substring(0, 6) + dots + arr[1];
			item.previousElementSibling.textContent = name;
		});
	});

	form.forEach((item) => {
		item.addEventListener('submit', (e) => {
			// отмена стандартной отправки данных по submit
			e.preventDefault();
			// создаем блок с сообщением
			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			item.parentNode.appendChild(statusMessage);
			// всплытие блока формы на место после отправки
			item.classList.add('animated', 'fadeOutUp');
			setTimeout(() => {
				item.style.display = 'none';
			}, 400);

			let statusImg = document.createElement('img');
			statusImg.setAttribute('src', message.spinner);
			statusImg.classList.add('animated', 'fadeInUp');
			statusMessage.appendChild(statusImg);

			let textMessage = document.createElement('div');
			textMessage.textContent = message.loading;
			statusMessage.appendChild(textMessage);

			// собираем данные, отправляем в formData
			const formData = new FormData(item);

         for (let key in state) {
            console.log(key, state[key]);
            formData.append(key, state[key]);
			}

			let api;
			item.closest('.popup-design') || item.classList.contains('calc_form')
				? (api = path.designer)
				: (api = path.question);

			//написание запроса и отправка на сервер. Промис
			postData(api, formData)
            .then((res) => {
					console.log(res);
					statusImg.setAttribute('src', message.ok);
					textMessage.textContent = message.success;
				})
				.catch(() => {
					statusImg.setAttribute('src', message.fail);
					textMessage.textContent = message.fail;
				})
				.finally(() => {
					clearInputs();
					setTimeout(() => {
						statusMessage.remove();
						item.style.display = 'block';
						item.classList.remove('fadeOutUp');
						item.classList.add('fadeInUp');
					}, 5000);
				});
		});
	});
};

export default forms;
