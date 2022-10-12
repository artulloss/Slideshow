import SlideElement from "./slideElement";

export default class TextSlideElement extends SlideElement {
  private _text!: string;

  constructor(
    top: number,
    left: number,
    width: number,
    height: number,
    zIndex: number,
    text: string,
    element: HTMLElement
  ) {
    super(top, left, width, height, zIndex, element);
    this.text = text;
  }

  public get text() {
    return this._text;
  }

  public set text(value: string) {
    this._element.innerHTML = value;
    this._text = value;
  }
}
