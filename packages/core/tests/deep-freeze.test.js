it("deep freezes nested objects", () => {
  const value = deepFreeze({
    a: {
      b: [1, 2, 3],
    },
  });

  expect(Object.isFrozen(value)).toBe(true);
  expect(Object.isFrozen(value.a)).toBe(true);
  expect(Object.isFrozen(value.a.b)).toBe(true);
});
