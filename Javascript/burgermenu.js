//Burgermenu
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const nav = document.querySelector("nav");

  burgerMenu.addEventListener("click", function () {
    nav.classList.toggle("active");
    burgerMenu.classList.toggle("open");
  });
});

//Scroll to top
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Before and after pictures
function showImage(imageNumber) {
  var beforeImage = document.getElementById("beforeImage");
  var afterImage = document.getElementById("afterImage");

  // Skift stien til billederne baseret på dit behov
  switch (imageNumber) {
    case 1:
      beforeImage.src = "img/before1.webp";
      afterImage.src = "img/after1.webp";
      break;
    case 2:
      beforeImage.src = "img/before2.webp";
      afterImage.src = "img/after2.webp";
      break;
    case 3:
      beforeImage.src = "img/before3.webp";
      afterImage.src = "img/after3.webp";
      break;
    case 4:
      beforeImage.src = "img/before4.webp";
      afterImage.src = "img/after4.webp";
      break;
    case 5:
      beforeImage.src = "img/before5.webp";
      afterImage.src = "img/after5.webp";
      break;
    default:
      break;
  }
}
