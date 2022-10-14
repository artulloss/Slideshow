import Slide from "./slide";
import "./style.css";
import { debounce } from "./utils";

export enum Direction {
  FORWARD,
  BACKWARD,
}

class SlideShow {
  private currentSlide = 0;
  private previousSlide = -1;
  private slideContainer: HTMLDivElement;

  private slides: Slide[];

  constructor(container: HTMLDivElement) {
    this.slideContainer = container;
    const nextBtn = document.getElementById("next") as HTMLButtonElement;
    const prevBtn = document.getElementById("prev") as HTMLButtonElement;
    nextBtn.addEventListener("click", this.goToNextSlide);
    prevBtn.addEventListener("click", this.goToPrevSlide);
    this.slides = [
      {
        backgroundImage: "https://picsum.photos/1920/1080",
      },
      {
        backgroundImage: "https://picsum.photos/1920/1081",
      },
      {
        backgroundImage: "https://picsum.photos/1920/1082",
      },
      {
        backgroundImage: "https://picsum.photos/1920/1083",
      },
      {
        backgroundImage: "https://picsum.photos/1920/1085",
      },
      {
        backgroundImage: "https://picsum.photos/1920/1086",
      },
      {
        backgroundImage: "https://picsum.photos/1920/1087",
      },
      {
        backgroundImage: "https://picsum.photos/1920/1088",
      },
    ].map(this.parseSlides);
    document.addEventListener("keydown", debounce((e) => {
      if (e.key === "ArrowRight" || e.key === "Space") {
        this.goToNextSlide();
      } else if (e.key === "ArrowLeft") {
        this.goToPrevSlide();
      }
    }, 1000, true));
    this.render(Direction.FORWARD);
  }

  /**
   * Render the current state of the application
   */
  public render = (direction: Direction) => {
    this.slideContainer.classList.toggle(
      "slide__container--forward",
      direction === Direction.FORWARD,
    );
    this.slideContainer.classList.toggle(
      "slide__container--backward",
      direction === Direction.BACKWARD,
    );
    this.slides.forEach((slide: Slide, i: number) => {
      slide.active = i === this.currentSlide;
      slide.isPrevious = i === this.previousSlide;
    });
  };

  private parseSlides = (slide: EncodedSlide, i: number) => {
    const slideDiv = document.createElement("div");
    slideDiv.classList.add("slide");
    this.slideContainer.appendChild(slideDiv);
    return new Slide(
      slideDiv,
      i === this.currentSlide,
      slide.backgroundImage
    );
  };

  public goToSlide = (value: number, direction: Direction) => {
    if (value < 0) {
      value = this.slides.length - 1;
    }
    this.previousSlide = this.currentSlide;
    this.currentSlide = value % this.slides.length;
    const { currentSlide, previousSlide } = this;
    console.log({ currentSlide, previousSlide });
    this.render(direction);
    const next = document.querySelector("#next");
    const prev = document.querySelector("#prev");
    next?.setAttribute("disabled", "true");
    prev?.setAttribute("disabled", "true");
    setTimeout(() => {
      next?.removeAttribute("disabled");
      prev?.removeAttribute("disabled");
    }, 1000);
  };

  public goToNextSlide = () => {
    this.goToSlide(this.currentSlide + 1, Direction.FORWARD);
  }

  public goToPrevSlide = () => {
    this.goToSlide(this.currentSlide - 1, Direction.BACKWARD);
  }

}

(
  document.querySelectorAll(".slide__container") as NodeListOf<HTMLDivElement>
).forEach((slideContainer) => {
  new SlideShow(slideContainer);
});

export default SlideShow;

