const emailUser = "isabellalizarde_27";
const emailDomain = "yahoo.com";

document
  .getElementById("contact__email")
  .setAttribute("href", `mailto:${emailUser}@${emailDomain}`);

// function updateImageSrc() {
//   const img = document.querySelector(".intro__photo");
//   if (window.innerWidth < 768) {
//     img.src = "/images/daly-portrait-mobile.jpg";
//   } else {
//     img.src = "/images/daly-portrait.jpg";
//   }
// }

// window.addEventListener("load", updateImageSrc);
// window.addEventListener("resize", updateImageSrc);
