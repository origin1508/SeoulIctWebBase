const $ = (selector) => {
  return document.querySelector(selector);
};

const slideBanner = () => {
  let index = 0;
  const leftArrow = $(".left_arrow");
  const rightArrow = $(".right_arrow");

  const handleArrowButton = (e) => {
    const target = e.target;
    const slideImage = $(".slide_image");
    const slideImages = $(".slide_image").children;
    if (target.className === "left_arrow") {
      if (index === 0) {
        index = slideImages.length - 1;
      } else {
        index -= 1;
      }
    } else {
      if (index === slideImages.length - 1) {
        index = 0;
      } else {
        index += 1;
      }
    }
    slideImage.setAttribute("style", `transform: translateX(-${index * 100}%)`);
  };

  leftArrow.addEventListener("click", handleArrowButton);
  rightArrow.addEventListener("click", handleArrowButton);
};

slideBanner();
