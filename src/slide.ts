import SlideElement from "./slideElement";

export default class Slide {
  private _active!: boolean;
  private _slideElements!: SlideElement[];
  private _element: HTMLDivElement;
  private _backgroundImage!: string | null;

  constructor(
    active: boolean,
    slideElements: SlideElement[],
    element: HTMLDivElement,
    backgroundImage: string | null
  ) {
    this.active = active;
    this.backgroundImage = backgroundImage;
    this._slideElements = slideElements;
    this._element = element;
  }

  public set backgroundImage(value: string | null) {
    this._element.style.backgroundImage = value ? `url(${value})` : "none";
    this._backgroundImage = value;
  }

  public get backgroundImage(): string | null {
    return this._backgroundImage;
  }

  public get active(): boolean {
    return this._active;
  }

  public set active(value: boolean) {
    this._element.style.display = value ? "block" : "none";
    this._active = value;
  }

  public get slideElements(): SlideElement[] {
    return this._slideElements;
  }
}
