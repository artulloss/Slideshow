import SlideElement from "./slideElement";

export default class ImageSlideElement extends SlideElement {
    private _src!: string;
    
    constructor(
        top: number,
        left: number,
        width: number,
        height: number,
        zIndex: number,
        src: string,
        element: HTMLElement
    ) {
        super(top, left, width, height, zIndex, element);
        this.src = src;
    }
    
    public get src() {
        return this._src;
    }
    
    public set src(value: string) {
        this._element.style.backgroundImage = `url(${value})`;
        this._src = value;
    }
}