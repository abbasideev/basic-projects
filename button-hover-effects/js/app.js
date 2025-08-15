const linksPreventDefault = document.querySelectorAll(".btn-list a");

for (let i = 0, n = linksPreventDefault.length; i < n; i++) {
  linksPreventDefault[i].onclick = function (event) {
    event.preventDefault();
    return false;
  };
}
