window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    document.querySelector(".go-to-top").style.display = "block";
  } else {
    document.querySelector(".go-to-top").style.display = "none";
  }
});
