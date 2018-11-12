import startCase from "lodash.startcase";

const colorRe = /colou?r/gi;

export default function string(prop, propName) {
  if (propName.match(colorRe)) {
    return {
      type: "Color",
      title: startCase(propName.replace(colorRe, ""))
    };
  }
  return {
    type: "String", // switch to ControlType[type]
    title: startCase(propName)
  };
}
