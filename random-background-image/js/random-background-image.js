const img = [];

img[0] = "./img/bg-image-00.jpg";
img[1] = "./img/bg-image-01.jpg";
img[2] = "./img/bg-image-02.jpg";
img[3] = "./img/bg-image-03.jpg";
img[4] = "./img/bg-image-04.jpg";

window.onload = function () {
  const random = Math.floor(Math.random() * img.length);
  document.body.style.backgroundImage = `url(${img[random]})`;
  console.log(random);
};
