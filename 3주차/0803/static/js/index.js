const $ = (selector) => {
  return document.querySelector(selector);
};

const slideBanner = () => {
  let index = 0;
  const leftArrow = $(".left_arrow");
  const rightArrow = $(".right_arrow");
  const slideImages = $(".slide_image").children;
  const sliderPagination = $(".slider_pagination");

  for (let i = 0; i < slideImages.length; i++) {
    sliderPagination.innerHTML += "<span class='slider_dot'></span>";
  }

  const handleArrowButton = (e) => {
    const target = e.target;
    const slideImage = $(".slide_image");

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

  const handleSliderPagenation = (e) => {
    const target = e.target;
    console.log(target);
  };

  leftArrow.addEventListener("click", handleArrowButton);
  rightArrow.addEventListener("click", handleArrowButton);
  sliderPagination.addEventListener("click", handleSliderPagenation);
};

slideBanner();
