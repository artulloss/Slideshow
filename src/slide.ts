export default class Slide {
  private _active!: boolean;
  private _element: HTMLElement;
  private _isPrevious = false;

  constructor(
    element: HTMLElement,
    active: boolean,
    isPrevious: boolean,
  ) {
    this._element = element;
    this.active = active;
    this.isPrevious = isPrevious;
    console.log("this.isPrevious", this.isPrevious);
  }

  public get active(): boolean {
    return this._active;
  }

  public set active(value: boolean) {
    this._element.classList.toggle("active", value);
    this._active = value;
  }

  public set isPrevious(value: boolean) {
    console.log("isPrevious", value);
    this._element.classList.toggle("previous_active", value);
    this._isPrevious = value;
  }

  public get isPrevious(): boolean {
    return this._isPrevious;
  }

  public get children(): HTMLDivElement[] {
    return this._element.children as unknown as HTMLDivElement[];
  }
}