// intro animation
let nextDom = document.getElementById('next')
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list')
let timeAutoNext = 5000;
let timeRunning = 3000
let runTimeOut;
let runAutoRun = setTimeout ( () => {
    nextDom.click()
}, timeAutoNext)

nextDom.onclick = function() {
    showSlider('next')
}

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');

    if(type === 'next') {
        listItemDom.appendChild(itemSlider[0])
        carouselDom.classList.add('next')
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next')
    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext)
}