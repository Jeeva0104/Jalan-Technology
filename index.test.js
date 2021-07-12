const { it, expect } = require("@jest/globals");
const { main } = require("./index");

describe("checking main", () => {
  it("should retun expected result", () => {
    const result = main([1, 2, 3, 4]);
    console.log(result);
    expect(result).toEqual([1, 4, 2, 3]);
  });
  it("should retun expected result", () => {
    const result = main([100, 22, 30, 4]);
    expect(result).toEqual([100, 4, 22, 30]);
  });

  it("should retun expected result", () => {
    const result = main([-1, 2, -3, 5, 2, -1000]);
    expect(result).toEqual([-1, 5, -1000, 2, -3, 2]);
  });

  it("should retun expected result", () => {
    const result = main([]);
    expect([]).toEqual([]);
  });
});
