const videoBlock1 = document.getElementById('.video-block1')
const videoBlock2 = document.getElementById('.video-block2')
const videoPagination1 = document.getElementById('.video-pagination1')
const videoPagination2 = document.getElementById('.video-pagination2')

videoPagination1.addEventListener('click', () => {
    videoBlock1.classList.add('active')
    videoBlock2.classList.add('nonactive');
    
});

videoPagination2.addEventListener('click', () => {
    videoBlock1.classList.add('nonactive');
    videoBlock2.classList.add('active');
});