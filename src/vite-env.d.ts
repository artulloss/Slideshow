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