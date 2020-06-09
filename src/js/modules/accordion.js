const accordion = (triggetsSelector /*, itemsSelector */) => {
   const btns = document.querySelectorAll(triggetsSelector);
   
   // ! Вывод акордиона через JS+CSS
/*   // const blocks = document.querySelectorAll(itemsSelector);
      // Добавляем анимации контенту
	blocks.forEach((block) => {
		block.classList.add('animated', 'fadeInDown');
	});
	// Реакция на тригеры которые мы нажимаем
	btns.forEach((btn) => {
		btn.addEventListener('click', function () {
			if (!this.classList.contains('active')) {
				btns.forEach((btn) => {
					btn.classList.remove('active', 'active-style');
				});
				this.classList.add('active', 'active-style');
			}
		});
	});*/
   
   // ! Аккордеон на чистом JS 
   btns.forEach(btn => {
      btn.addEventListener('click', function () {
         // работа с классами
         this.classList.toggle('active-style');   
         this.nextElementSibling.classList.toggle('active-content');
         
         if (this.classList.contains('active-style')) {
            this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
         } else {
            this.nextElementSibling.style.maxHeight = '0px';
         }
      });
   });
   
}; 

export default accordion;