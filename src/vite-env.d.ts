/// <reference types="vite/client" />

interface EncodedSlideElement {
  type: string;
  top: number;
  left: number;
  width: number;
  height: number;
  zIndex: number;
  element: HTMLElement;
  text?: string;
  src?: string;
}

function assert(value: unknown): asserts value {
  if (!value) {
    throw new Error("Value is undefined");
  }
}
