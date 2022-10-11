import ImageSlideElement from './imageSlideElement';
import Slide from './slide';
import SlideElement from './slideElement';
import './style.css'
import TextSlideElement from './textSlideElement';

// Internal state

let currentSlide = 0;
let slides: Slide[] = [];

const slideContainer = document.getElementById('slide__container') as HTMLDivElement;

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

const slideDivs = (Array.from(slideContainer.children) as HTMLDivElement[]).map((div, index) => {
  const slideElements = (Array.from(div.children) as HTMLDivElement[]).map((child: HTMLElement) => {
    if(child instanceof HTMLImageElement) {
      return new ImageSlideElement(
        0,0,0,0,1,
        child.src,
        child
      );
    } else if (
      child instanceof HTMLHeadingElement || 
      child instanceof HTMLParagraphElement
    ) {
      return new TextSlideElement(
        0,0,0,0,1,
        child.innerText,
        child
      );
    }
    else {
      console.log(child);
      throw new Error("Unknown slide element");
    }
  });
  return new Slide(index === currentSlide, slideElements, div);
});