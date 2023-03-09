const Images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const randomImages = Images[Math.floor(Math.random() * Images.length)];

const bgImage = document.createElement("img");

bgImage.src = `./img/${randomImages}`

document.body.appendChild(bgImage);