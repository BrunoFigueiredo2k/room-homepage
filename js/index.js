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

// Set active content of next item after current active one. (title, description and image)
function setContent(nextActiveItem){
    content[nextActiveItem].active = true;
    imageSlider.style.backgroundImage = `url(${content[nextActiveItem].imageUrl})`;
    titleSlider.innerHTML = content[nextActiveItem].title;
    paragraphSlider.innerHTML = content[nextActiveItem].paragraph;
}

/* -- Mobile menu -- */
const hamburgerBtn = document.querySelector('#hamburger-btn');
const listItems = document.querySelectorAll('.menu-items li');

// Click listener hamburger menu btn
hamburgerBtn.addEventListener('click', () =>{
    for (i = 0; i < listItems.length; i++){
        if (listItems[i].style.display != 'inline-block') {
            listItems[i].style.display = 'inline-block';
            setMobileHeaderActive(true);
        }
        else {
            listItems[i].style.display = 'none';
            setMobileHeaderActive(false);
        }
    }
});

// Set mobile header if active
function setMobileHeaderActive(active){
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo-li');

    if (active){
        header.style.color = COLOR_BLACK;
        header.style.backgroundColor = COLOR_WHITE;
        logo.style.display = 'none';

        // Change hamburger btn to cross
        hamburgerBtn.innerHTML = '&times;';
        hamburgerBtn.style.color = COLOR_GREY;
    } else {
        header.style.color = COLOR_WHITE;
        header.style.backgroundColor = 'transparent';
        logo.style.display = 'block';

        // Change hamburger btn back to hamburger icon
        hamburgerBtn.innerHTML = '&#9776;';
        hamburgerBtn.style.color = COLOR_WHITE;
    }
}