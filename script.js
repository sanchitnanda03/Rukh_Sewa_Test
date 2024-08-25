const scrollContainer = document.querySelector('.scrolling-container');
let scrollAmount = 0;
const cardWidth = scrollContainer.querySelector('.scrolling-card').offsetWidth + 40; // 40px gap between cards

function scrollHorizontally() {
    scrollAmount += cardWidth;
    scrollContainer.style.transition = 'transform 0.5s ease';
    scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;

    setTimeout(() => {
        scrollContainer.style.transition = 'none';
        scrollContainer.appendChild(scrollContainer.firstElementChild);
        scrollContainer.style.transform = `translateX(0)`;
        scrollAmount = 0;
    }, 500);
}

setInterval(scrollHorizontally, 3000);
