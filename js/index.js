// Get all data for image, title and paragraph of each slider
const imageSlider = document.querySelector('#hero-bg-top-1');
const titleSlider = document.querySelector('#title-slider');
const paragraphSlider = document.querySelector('#paragraph-slider');

const content = [slider1, slider2, slider3];

// Event listeners for arrow buttons for slider
const arrowLeft = document.querySelector('#arrow-slider-left');
const arrowRight = document.querySelector('#arrow-slider-right');

arrowLeft.addEventListener('click', () => {
    checkIfActive('left');
})

arrowRight.addEventListener('click', () => {
    checkIfActive('right');
})

function checkIfActive(direction) {
    navigateLeftRight(direction);
}

// Navigation functionality based on directions left and right
function navigateLeftRight(direction){
    if (direction == 'left'){
        for (i = 0; i < content.length; i++){
            // set active item to false if it's currently active
            if (content[i].active){
                content[i].active = false;

                // if counter is equal to last item in object then revert back to first item
                if (i === (content.length - 1)){ 
                    nextActiveItem = 0; 
                } else {
                    nextActiveItem = (i + 1);
                }
                
                // Set content of next item in array and set active state to true
                setContent(nextActiveItem);

                break;
            }
        }    
    } else {
        // Same as left direction but in reverse
        for (i = content.length - 1; i >= 0; i--) {
            // set active item to false if it's currently active
            if (content[i].active){
                content[i].active = false;

                if (i === 0){ 
                    nextActiveItem = (content.length - 1); 
                } else {
                    nextActiveItem = (i - 1);
                }
                
                // Set content of next item in array and set active state to true
                setContent(nextActiveItem);

                break;
            }
        }
    }
}

function setContent(nextActiveItem){
    content[nextActiveItem].active = true;
    imageSlider.style.backgroundImage = `url(${content[nextActiveItem].imageUrl})`;
    titleSlider.innerHTML = content[nextActiveItem].title;
    paragraphSlider.innerHTML = content[nextActiveItem].paragraph;
}

/* -- Mobile menu -- */
const hamburgerBtn = document.querySelector('#hamburger-btn');
const listItems = document.querySelectorAll('.horizontal-list li');

hamburgerBtn.addEventListener('click', activateClass);

function activateClass(e) {
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove('active');
    }
    e.target.classList.add('active');
}