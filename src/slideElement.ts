export default abstract class SlideElement {
  protected _top!: number;
  protected _left!: number;
  protected _width!: number;
  protected _height!: number;
  protected _zIndex!: number;
  protected _element!: HTMLElement;

  constructor(
    _top: number,
    _left: number,
    _width: number,
    _height: number,
    _zIndex: number,
    element: HTMLElement
  ) {
    this.left = _left;
    this.top = _top;
    this.width = _width;
    this.height = _height;
    this.zIndex = _zIndex;
    this._element = element;
  }

  public get left() {
    return this._left;
  }

  public set left(value: number) {
    this._element.style.left = value + "vw";
    this._left = value;
  }

  public get top() {
    return this._top;
  }

  public set top(value: number) {
    this._element.style.top = value + "vh";
    this._top = value;
  }

  public get width() {
    return this._width;
  }

  public set width(value: number) {
    this._element.style.width = value + "px";
    this._width = value;
  }

  public get height() {
    return this._height;
  }

  public set height(value: number) {
    this._element.style.height = value + "px";
    this._height = value;
  }

  public get zIndex() {
    return this._zIndex;
  }

  public set zIndex(value: number) {
    this._element.style.zIndex = String(value);
    this._zIndex = value;
  }
}
