console.log("I am Alive");


const backgroundImage = document.querySelector(".background-image");
const images = ["45jwm9.png", "4v8opn.jpg", "958ejd.png", "g8jxe7.jpg", "j5x7zw.jpg", "kw8wpd.png", "p2v623.jpg", "vm7368.png", "yjm8kg.jpg", "ymg5x7.jpg"];

const getRandomImage = () => `./assest/${images[Math.floor(Math.random() * images.length)]}`;
const setRandomImage = () => { backgroundImage.src = getRandomImage()};

document.addEventListener("click", () => {if (event.button === 0) setRandomImage()});
setRandomImage();

console.log(backgroundImage.src);