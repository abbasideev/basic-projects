const compressFullImg = document.querySelector(".full-img");
const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery-items img");
const closeModal = document.querySelector(".close-modal");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open-full-img");
    const compressFullImgSrc = preview.getAttribute("src");
    compressFullImg.src = compressFullImgSrc;
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("open-full-img");
});
