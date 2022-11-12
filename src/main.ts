import Slide from "./slide";
import "./style.pcss";

export enum Direction {
  FORWARD,
  BACKWARD,
}

const ANIMATION_DURATION = 750; // Should match the animation duration in style.css
class SlideShow {
  private slideContainer: HTMLDivElement;
  private slides: Slide[];

  private currentSlide = 0;
  private previousSlide = -1;
  private navigationAllowed = false;

  constructor(container: HTMLDivElement) {
    this.slideContainer = container;
    container.classList.add("slide__container--initiliazing");
    this.slides = Array.from(container.children).map((element, i) => {
      element.classList.add("slide");
      return new Slide(
        element as HTMLElement,
        i === this.currentSlide,
        i === container.childElementCount - 1
      );
    });
    this.addNavigation();
    this.renderDirection(Direction.FORWARD);
    setTimeout(() => {
      container.classList.remove("slide__container--initiliazing");
      container.classList.add("slide__container--loaded");
      this.navigationAllowed = true;
    }, ANIMATION_DURATION);
  }

  /**
   *
   * @param direction
   */
  private renderDirection(direction: Direction) {
    this.slideContainer.classList.toggle(
      "slide__container--forward",
      direction === Direction.FORWARD
    );
    this.slideContainer.classList.toggle(
      "slide__container--backward",
      direction === Direction.BACKWARD
    );
  }

  /**
   * Render the current state of the application
   */
  public render = (direction: Direction) => {
    this.renderDirection(direction);
    this.slides.forEach((slide: Slide, i: number) => {
      slide.active = i === this.currentSlide;
      slide.isPrevious = i === this.previousSlide;
    });
  };

  private addNavigation = () => {
    const slideNavigationContainer = document.createElement("div");
    slideNavigationContainer.classList.add("slide__navigation__container");
    slideNavigationContainer.innerHTML = `
      <button class="slide__navigation__container__prev">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </button>
      <button class="slide__navigation__container__next">
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </button>
    `;
    this.slideContainer.appendChild(slideNavigationContainer);
    const nextBtn = slideNavigationContainer.querySelector(
      ".slide__navigation__container__next"
    );
    const prevBtn = slideNavigationContainer.querySelector(
      ".slide__navigation__container__prev"
    );
    nextBtn!.addEventListener("click", this.goToNextSlide);
    prevBtn!.addEventListener("click", this.goToPrevSlide);
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space") {
        this.goToNextSlide();
      } else if (e.key === "ArrowLeft") {
        this.goToPrevSlide();
      }
    });
  };

  public goToSlide = (value: number, direction: Direction) => {
    if (!this.navigationAllowed) return;
    if (value < 0) {
      value = this.slides.length - 1;
    }
    this.previousSlide = this.currentSlide;
    this.currentSlide = value % this.slides.length;
    this.render(direction);
    const next = this.slideContainer.querySelector(
      ".slide__navigation__container__next"
    );
    const prev = this.slideContainer.querySelector(
      ".slide__navigation__container__prev"
    );
    next?.setAttribute("disabled", "true");
    prev?.setAttribute("disabled", "true");
    this.navigationAllowed = false;
    setTimeout(() => {
      next?.removeAttribute("disabled");
      prev?.removeAttribute("disabled");
      this.navigationAllowed = true;
    }, ANIMATION_DURATION);
  };

  public goToNextSlide = () => {
    this.goToSlide(this.currentSlide + 1, Direction.FORWARD);
  };

  public goToPrevSlide = () => {
    this.goToSlide(this.currentSlide - 1, Direction.BACKWARD);
  };
}

(
  document.querySelectorAll(".slide__container") as NodeListOf<HTMLDivElement>
).forEach((slideContainer) => {
  new SlideShow(slideContainer);
});

export default SlideShow;
