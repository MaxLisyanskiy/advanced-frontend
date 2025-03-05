// import { classNames } from "shared/lib/class-names/class-names";
import { classNames } from "./class-names";

describe("clasNames", () => {
  test("with only first param", () => {
    expect(classNames("testClass")).toBe("testClass");
  });

  test("with additional params", () => {
    const expectedStr = "testClass class1 class2";
    expect(classNames("testClass", {}, ["class1 class2"])).toBe(expectedStr);
  });

  test("with mods (true, true)", () => {
    const expectedStr = "testClass hovered active class1 class2";
    expect(classNames("testClass", { hovered: true, active: true }, ["class1 class2"])).toBe(
      expectedStr
    );
  });
  test("with mods (true, false)", () => {
    const expectedStr = "testClass hovered class1 class2";
    expect(classNames("testClass", { hovered: true, active: false }, ["class1 class2"])).toBe(
      expectedStr
    );
  });
  test("with mods (true, undefined)", () => {
    const expectedStr = "testClass hovered class1 class2";
    expect(classNames("testClass", { hovered: true, active: undefined }, ["class1 class2"])).toBe(
      expectedStr
    );
  });
});
