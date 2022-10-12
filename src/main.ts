import Slide from "./slide";
import "./style.css";

// Internal state

let currentSlide = 0;
let slides: Slide[] = [
  {
    active: true,
    backgroundImage: null,
    slideElements: [
      {
        type: "text",
        top: 0,
        left: 0,
        width: 100,
        height: 100,
        zIndex: 1,
        element: document.createElement("h1"),
        text: "Hello World",
      } as EncodedSlideElement,
    ],
  },
].map((slide) => {
  //slide.slideElements.map(slideElement => {})
  const slideDiv = document.createElement("div");
  slideDiv.classList.add("slide");
  const childrenElements = slide.slideElements.map((slideElement) => {
    return createSlideElement(slideElement);
  });
  return new Slide(
    slide.active,
    childrenElements,
    slideDiv,
    slide.backgroundImage
  );
});

const slideContainer = document.getElementById(
  "slide__container"
) as HTMLDivElement;

// Navigation

function goToSlide(value: number) {
  currentSlide = slides.length % value;
}

const nextBtn = document.getElementById("next") as HTMLButtonElement;

nextBtn.addEventListener("click", () => {
  goToSlide(currentSlide + 1);
  console.log(currentSlide);
});

const prevBtn = document.getElementById("prev") as HTMLButtonElement;

prevBtn.addEventListener("click", () => {
  goToSlide(currentSlide - 1);
  console.log(currentSlide);
});

// Slide creation - I'm lazy and I prefer markup so I'm just going to create a bunch of slides in the markup and then grab them from the DOM
