export function assert(value: unknown): asserts value {
  if (!value) {
    throw new Error("Value is undefined");
  }
}

/**
 * Debounce function, originally by David Walsh, modified by me to work with TypeScript
 * https://davidwalsh.name/javascript-debounce-function
 * @param func 
 * @param wait 
 * @param immediate 
 * @returns 
 */
export function debounce(func: () => any, wait: number, immediate: boolean = false) {
	var timeout: number|undefined;
	return function debounced(this: any, ...args: []) {
		const context = this;
		const later = function() {
			timeout = undefined;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};