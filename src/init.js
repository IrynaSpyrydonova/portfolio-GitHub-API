'use strict';

import { TypeWriter } from './typeScript.js'

console.log('hello');



document.addEventListener('DOMContentLoaded', init);

  // Init App
    function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);
}