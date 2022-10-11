import SlideElement from "./slideElement";

export default class Slide {
  private _active!: boolean;
  private _slideElements!: SlideElement[];
  private _element: HTMLDivElement;

  constructor(active: boolean, slideElements: SlideElement[], element: HTMLDivElement) {
    this.active = active;
    this._slideElements = slideElements;
    this._element = element;
  }

  public get active() {
    return this._active;
  }

  public set active(value: boolean) {
    this._element.style.display = value ? "block" : "none";
    this._active = value;
  }

  public get slideElements() {
    return this._slideElements;
  }
}
