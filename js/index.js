// Get all data for image, title and paragraph of each slider
const imageSlider = document.querySelector('#hero-bg-top-1');
const titleSlider = document.querySelector('#title-slider');
const paragraphSlider = document.querySelector('#paragraph-slider');

const content = {
    slider1: {
        active: true,
        imageUrl: "../images/desktop-image-hero-1.jpg",
        title: "Discover innovative ways to decorate",
        paragraph: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    slider2: {
        active: false,
        imageUrl: "../images/desktop-image-hero-2.jpg",
        title: "We are available all across the globe",
        paragraph: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    slider3: {
        active: false,
        imageUrl: "../images/desktop-image-hero-3.jpg",
        title: "Manufactured with the best materials",
        paragraph: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
}

// Event listeners for arrow buttons for slider
const arrowLeft = document.querySelector('#arrow-slider-left');
const arrowRight = document.querySelector('#arrow-slider-right');

arrowLeft.addEventListener('click', () => {
    imageSlider.style.backgroundImage = `url(${content.slider2.imageUrl})`;
    titleSlider.innerHTML = content.slider2.title;
    paragraphSlider.innerHTML = content.slider2.paragraph;
    checkIfActive();
})

arrowRight.addEventListener('click', () => {
    alert('right');
})

function checkIfActive() {
    for (const key in content) {
        if (content.hasOwnProperty(key)) {
            const element = content[key];
            if (element.active){
                console.log("element: " + content + " is currently active.");
            } else {
                console.log("element: " + content + " is currently inactive.");
            }
            
        }
    }
}