let scrollpos = window.scrollY;
const header = document.querySelector(".hidee");
const header_height = 40;

const add_class_on_scroll = () => header.classList.add("showw");
const remove_class_on_scroll = () => header.classList.remove("showw");

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }

//   console.log(scrollpos);
});
