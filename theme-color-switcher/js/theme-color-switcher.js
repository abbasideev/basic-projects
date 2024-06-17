document.querySelectorAll(".theme-colors .color").forEach((color) => {
  color.onclick = () => {
    let background = color.style.background;
    document
      .querySelector(":root")
      .style.setProperty("--main-color", background);
  };
});
