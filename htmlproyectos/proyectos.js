document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".proyecto");

  carousels.forEach((carousel) => {
    const imgContainer = carousel.querySelector(".imgproyecto");
    const imgs = imgContainer.querySelectorAll("img");
    let index = 0;

    // Show the first image initially
    imgs.forEach((img, idx) => {
      img.style.display = idx === 0 ? "block" : "none";
    });

    const showImage = (i) => {
      imgs.forEach((img, idx) => {
        img.style.display = idx === i ? "block" : "none";
      });
    };

    const nextImage = () => {
      index = (index + 1) % imgs.length;
      showImage(index);
    };

    const prevImage = () => {
      index = (index - 1 + imgs.length) % imgs.length;
      showImage(index);
    };

    const btnLeft = carousel.querySelector(".btn-izquierda");
    const btnRight = carousel.querySelector(".btn-derecha");

    btnLeft.addEventListener("click", prevImage);
    btnRight.addEventListener("click", nextImage);
  });
});
