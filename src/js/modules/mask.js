const mask = (selector) => {

   let setCursorPosition = (pos, elem) => {
      elem.focus();
      // установить курсор в нужное место в инпуте
      if (elem.setSelectionRange) {
         elem.setSelectionRange(pos, pos);
      } else if (elem.setSelectionRange) {
         let range = elem.setSelectionRange;

         range.collapse(true);
         range.moveEnd('character', pos);
         range.moveStart('character', pos);
         range.select();
      }
   };

   function createMask(e) {
      // можно расположить в json и подключаь зависимо от страны в которой пользователь
      let matrix = '+7 (___) ___ __ __',
         i = 0,
         def = matrix.replace(/\D/g, ''),
         val = this.value.replace(/\D/g, '');
      // если пользователь удаляет +7 то цифры подставляются назад
      if (def.length >= val.length) {
         val = def;
      }

      this.value = matrix.replace(/./g, function (a) {
         return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
      });

      if (event.type === 'blur') {
         if (this.value.length == 2) {
            this.value = '';
         }
      } else {
            setCursorPosition(this.value.length, this);
      }
   }

   let inputs = document.querySelectorAll(selector);

   inputs.forEach(input => {
      input.addEventListener('input', createMask);
      input.addEventListener('focus', createMask);
      input.addEventListener('blur', createMask);
   });
};

export default mask;