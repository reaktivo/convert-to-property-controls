import mapObject from "./mapObject";

const obj = {
  a: 0,
  b: 1,
  c: 2,
  d: 3
};

describe("mapObject", () => {
  it("should map an object to values", () => {
    expect(mapObject(obj, x => x * 2)).toEqual({
      a: 0,
      b: 2,
      c: 4,
      d: 6
    });
  });

  it("should remove undefined and null values", () => {
    expect(mapObject(obj, x => (x !== 3 ? x : null))).toStrictEqual({
      a: 0,
      b: 1,
      c: 2
    });
  });

  it("should map an array", () => {
    expect(mapObject([1, 2, 3], x => x * 2)).toEqual([2, 4, 6]);
  });

  it("should removed falsy values from the array ", () => {
    expect(mapObject([1, 2, 3], x => (x !== 3 ? x : null))).toEqual([1, 2]);
  });
});
