import ImageSlideElement from "./imageSlideElement";
import TextSlideElement from "./textSlideElement";
import { assert } from "./utils";

export default function createSlideElement(encodedSlideElement: EncodedSlideElement) {
    const { type, top, left, width, height, zIndex, element, text, src } = encodedSlideElement; 
    switch (type) {
        case "image":
            assert(src !== undefined);
            return new ImageSlideElement(top, left, width, height, zIndex, src, element);
        case "text":
            assert(text !== undefined);
            return new TextSlideElement(top, left, width, height, zIndex, text, element);
        default:
            throw new Error("Unknown slide element type: " + type);
    }
}