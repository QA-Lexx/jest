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

  describe("Books names test suit without changes", () => {
    it("Books names should be sorted in ascending order without changes", () => {
      expect(
        sorting.sortByName([
          "Властелин Колец",
          "Волшебник изумрудного города",
          "Гарри Поттер",
        ])
      ).toEqual([
        "Властелин Колец",
        "Волшебник изумрудного города",
        "Гарри Поттер",
      ]);
    });
  });

  describe("Books names test suit without changes letter low register", () => {
    it("Books names should be sorted in ascending order without changes letter low register", () => {
      expect(
        sorting.sortByName([
          "властелин колец",
          "волшебник изумрудного города",
          "гарри поттер",
        ])
      ).toEqual([
        "властелин колец",
        "волшебник изумрудного города",
        "гарри поттер",
      ]);
    });
  });

  describe("Books names test suit same meaning", () => {
    it("Books names should be sorted in ascending order same meaning", () => {
      expect(
        sorting.sortByName([
          "Властелин Колец",
          "Властелин Колец",
          "Властелин Колец",
        ])
      ).toEqual([
        "Властелин Колец",
        "Властелин Колец",
        "Властелин Колец",
      ]);
    });
  });

  describe("Books names test suit same meaning letter low register", () => {
    it("Books names should be sorted in ascending order same meaning letter low register", () => {
      expect(
        sorting.sortByName([
          "властелин колец",
          "властелин колец",
          "властелин колец",
        ])
      ).toEqual([
        "властелин колец",
        "властелин колец",
        "властелин колец",
      ]);
    });
  });

const { sortByName } = require("../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
    ]

    const expected = [
        "Властелин Колец",
        "Волшебник изумрудного города",
        "Гарри Поттер",
    ]

    const result = sortByName(input)
  });

  test("Function should throw exception when user without args", () => {
    expect(() => sortByName()).toThrow(TypeError)
  })
});