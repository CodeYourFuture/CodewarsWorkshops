const findMissing = require("./alternateSolution");

describe("Arithmetic progression", () => {
  test("Testing with [1, 3, 4]", function () {
    expect(findMissing([1, 3, 4])).toBe(2);
  });

  test("Testing with [1, 3, 5, 9, 11]", function () {
    expect(findMissing([1, 3, 5, 9, 11])).toBe(7);
  });

  test("Testing with [1, 5, 9, 17]", function () {
    expect(findMissing([1, 5, 9, 17])).toBe(13);
  });

  test("Testing with [7, 14, 28, 35]", function () {
    expect(findMissing([7, 14, 28, 35])).toBe(21);
  });

  test("Testing with [1, 5, 7, 9]", function () {
    expect(findMissing([1, 5, 7, 9])).toBe(3);
  });

  test("Testing with [[5, 0, -5, -15, -20]]", function () {
    expect(findMissing([5, 0, -5, -15, -20])).toBe(-10);
  });

  test("Testing with [[-5, -15, -20]]", function () {
    expect(findMissing([-5, -15, -20])).toBe(-10);
  });
});
