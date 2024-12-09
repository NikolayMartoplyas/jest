const sorting = require("../../app");
describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});

describe("test for equal values", () => {
  test("names must be the same", () => {
    const arrayName = ["Анна", "анна", "вика"];
    const expected = ["Анна", "анна", "вика"];
    const result = sorting.sortByName(arrayName);
    expect(result).toEqual(expected);
  });
});
