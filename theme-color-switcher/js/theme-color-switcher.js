document.querySelectorAll(".theme-colors div").forEach((color) => {
  color.onclick = () => {
    let background = color.style.background;
    document
      .querySelector(":root")
      .style.setProperty("--main-color", background);
  };
});
