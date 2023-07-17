const sorting = require("../app");

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

describe("Books names test suit letter low register", () => {
    it("Books names should be sorted in ascending order letter low register", () => {
      expect(
        sorting.sortByName([
          "гарри поттер",
          "властелин колец",
          "волшебник изумрудного города",
        ])
      ).toEqual([
        "властелин колец",
        "волшебник изумрудного города",
        "гарри поттер",
      ]);
    });
  });