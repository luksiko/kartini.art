const checkTextInputs = (selector) => {
   const txtInput = document.querySelectorAll(selector);

   txtInput.forEach(input => {
      input.addEventListener('keypress', function (e) {
         if (e.key.match(/[^а-яё 0-9]/ig)) {
            e.preventDefault();
         }
      });
   });
};

export default checkTextInputs;