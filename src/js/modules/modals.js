const modals = () => {
   let btnPreaaed = false; // * фиксируем, кликнул ли пользователь кудато false 
   function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
      const trigger = document.querySelectorAll(triggerSelector),
         modal = document.querySelector(modalSelector),
         close = document.querySelector(closeSelector),
         windows = document.querySelectorAll('[data-modal]'),
         scroll = calcScroll();

      trigger.forEach(item => {
         item.addEventListener('click', e => {
            if (e.target) {
               e.preventDefault();
            }
            btnPreaaed = true; // * меняем значение после клика на true

            if (destroy) {
               item.remove();
            }

            windows.forEach(item => {
               item.style.display = 'none';
               // добавляем анимацию из библиотеки animated.css
               item.classList.add('animated', 'fadeIn');
            });

            modal.style.display = "block";
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = `${scroll}px`;
         });
      });

      close.addEventListener('click', () => {
         windows.forEach(item => {
            item.style.display = 'none';
         });
         modal.style.display = "none";
         document.body.style.overflow = "";
         document.body.style.marginRight = '0px';
      });

      modal.addEventListener('click', e => {
         if (e.target === modal) {
            windows.forEach(item => {
               item.style.display = 'none';
            });
            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = '0px';
         }
      });
   }

   function showModalByTime(selector, time) {
      setTimeout(function () {
         let display;
         // если модальное окно уже открыто, не открывать его по таймауту
         document.querySelectorAll('[data-modal]').forEach(item => {
            if (getComputedStyle(item).display !== 'none') { //getComputedStyle - не инлайновый а реальные стили обьекта
               display = 'block';
            }
         });

         if (!display) {
            document.querySelector(selector).style.display = "block";
            document.body.style.overflow = "hidden";
            let scroll = calcScroll();
            document.body.style.marginRight = `${scroll}px`;
         }
      }, time);
   }

   function calcScroll() {
      let div = document.createElement('div');

      div.style.widht = '50px';
      div.style.height = '50px';
      div.style.overflowY = 'scroll';
      div.style.visibility = 'hidden';

      document.body.appendChild(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;
      div.remove();

      return scrollWidth;
   }

   function openByScroll(selector) {
      window.addEventListener('scroll', () => {
         // оптимизация под старые браузеры
         let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight); 
         // если расстояние сверху + расстояние  видимого экрана >= высоты скрола
         if (!btnPreaaed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
            document.querySelector(selector).click(); // вызываем событие вручную
         }
      });
   }

   bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
   bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
   bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
   openByScroll('.fixed-gift');
   // showModalByTime('.popup-consultation', 3000);
};

export default modals;