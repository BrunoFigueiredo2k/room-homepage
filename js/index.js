// Get all data for image, title and paragraph of each slider
const imageSlider = document.querySelector('#hero-bg-top-1');
const titleSlider = document.querySelector('#title-slider');
const paragraphSlider = document.querySelector('#paragraph-slider');

const content = [
    slider1,
    slider2,
    slider3
]

// Event listeners for arrow buttons for slider
const arrowLeft = document.querySelector('#arrow-slider-left');
const arrowRight = document.querySelector('#arrow-slider-right');

arrowLeft.addEventListener('click', () => {
    // imageSlider.style.backgroundImage = `url(${content.slider2.imageUrl})`;
    // titleSlider.innerHTML = content.slider2.title;
    // paragraphSlider.innerHTML = content.slider2.paragraph;
    checkIfActive();
})

arrowRight.addEventListener('click', () => {
    alert('right');
})

function checkIfActive() {
    for (i = 0; i < content.length; i++){
        if (content[i].active){
            console.log(content[i]);
        }
    }
}