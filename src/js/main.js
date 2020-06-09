import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import changeModalState from './modules/changeModalState';
import filter from './modules/filter';
import accordion from './modules/accordion';
import burger from './modules/burger';
import pictureSize from './modules/pictureSize';
import scrolling from './modules/scrolling';
import drop from './modules/drop';


window.addEventListener('DOMContentLoaded', () => {
   'use strict';

   let modalState = {};

   modals();
   drop();
   pictureSize('.sizes-block');
   accordion('.accordion-heading'/* , '.accordion-block' */);
   burger('.burger-menu', '.burger');
   filter('.portfolio-menu', '.portfolio-block', '.portfolio-no');
   forms(modalState);
   changeModalState(modalState);
   sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
   sliders('.main-slider-item', 'vertical');
   mask('[name="phone"]');
   checkTextInputs('[name="name"]');
   checkTextInputs('[name="message"]');
   showMoreStyles('.button-styles', '#styles .row');
   calc('#size', '#material', '#options', '.promocode', '.calc-price');
   scrolling('.pageup');
});