const bgImages = ["img_01.jpg", "img_02.jpg", "img_03.jpg"];
const pickImage = bgImages[Math.floor(Math.random() * bgImages.length)];
const bgImage = document.createElement("img");

bgImage.src = `./images/${pickImage}`;

console.log(bgImage);

document.body.appendChild(bgImage);

