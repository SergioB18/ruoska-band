const hamburger1 = document.getElementById('hamb1'),
        hamburger2 = document.getElementById('hamb2'),
        menu = document.querySelector('.menu320-576'),
        closeElem = document.querySelector('.menu320-576__close');

hamburger1.addEventListener('click', () => {
    menu.classList.add('active');
});

hamburger2.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});