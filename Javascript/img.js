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

function showImage(imageNumber) {
  var beforeImage = document.getElementById("beforeImage");

  // Skift stien til billederne baseret på dit behov
  switch (imageNumber) {
    case 1:
      beforeImage.src = "lbh_img/before1.webp";
      break;
    case 2:
      beforeImage.src = "lbh_img/before2.webp";
      break;
    case 3:
      beforeImage.src = "lbh_img/before3.webp";
      break;
    case 4:
      beforeImage.src = "lbh_img/before4.webp";
      break;
    case 5:
      beforeImage.src = "lbh_img/before5.webp";
      break;
    case 6:
      beforeImage.src = "lbh_img/before6.webp";
      break;
    default:
      break;
  }
}
