export default class Slide {
  private _active!: boolean;
  private _element: HTMLDivElement;
  private _backgroundImage!: string | null;
  private _isPrevious = false;

  constructor(
    element: HTMLDivElement,
    active: boolean,
    backgroundImage: string | null
  ) {
    this._element = element;
    this.active = active;
    this.backgroundImage = backgroundImage;
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
    this._element.classList.toggle("active", value);
    this._active = value;
  }

  public set isPrevious(value: boolean) {
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