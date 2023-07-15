function toggleDarkMode() {
  var root = document.documentElement;
  root.classList.toggle("dark-theme-variables");
}

const closeMenu = function () {
  const close = document.querySelector("aside");

  close.classList.remove("open");
  const body = document.querySelector("body");
  body.classList.remove("stop-overflow");
};

const openMenu = function () {
  const open = document.querySelector("aside");

  open.classList.add("open");
  const body = document.querySelector("body");
  body.classList.add("stop-overflow");
};
