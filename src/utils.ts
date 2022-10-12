export function assert(value: unknown): asserts value {
  if (!value) {
    throw new Error("Value is undefined");
  }
}
