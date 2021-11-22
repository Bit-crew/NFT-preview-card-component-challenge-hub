'use strict'

const semiCardImage = document.querySelector('.semi-card__image');
const activeCard = document.querySelector('#active-card');

let state = false;
semiCardImage.addEventListener(
    'click', () => {
        if(!state) {
            state = true;
            activeCard.style.display = 'inline-block';
        }
        else {
            state = false;
            activeCard.style.display = 'none'
        }
    }
);
