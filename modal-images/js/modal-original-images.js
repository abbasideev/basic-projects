const originalFullImg = document.querySelector(".full-img");
const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery-items img");
const closeModal = document.querySelector(".close-modal");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open-full-img");
    const originalFullImgSrc = preview.getAttribute("data-original");
    originalFullImg.src = originalFullImgSrc;
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("open-full-img");
});
