import convertToPropertyControls from ".";
import PropTypes from "prop-types";

const propTypes = {
  title: PropTypes.string,
  tintColor: PropTypes.string,
  options: PropTypes.oneOf(["one", "two", "three"])
};

describe("convertToPropertyControls", () => {
  it("should convert to strings", () => {
    const result = convertToPropertyControls(propTypes);
    expect(result.title).toEqual({ title: "Title", type: "String" });
  });

  it("should convert to colors", () => {
    const result = convertToPropertyControls(propTypes);
    expect(result.tintColor).toEqual({ title: "Tint", type: "Color" });
  });

  it("should convert to enums", () => {
    const result = convertToPropertyControls(propTypes);
    expect(result.options).toEqual({
      optionTitles: ["One", "Two", "Three"],
      options: ["one", "two", "three"],
      title: "Options",
      type: "Enum"
    });
  });
});
