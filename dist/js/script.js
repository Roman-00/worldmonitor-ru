window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // -------------------------------------------------- Subscribe
    const subscribeLine = document.querySelector('.button__subscribe--line'),
        buttonSubscribe = document.querySelector('.button__subscribe');

    subscribeLine.addEventListener('click', () => {
        if (window.innerWidth < 621)
        {
            buttonSubscribe.classList.toggle('button__subscribe--active');
        }
    });

});