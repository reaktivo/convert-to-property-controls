import startCase from "lodash.startcase";

export default function number(prop, propName) {
  return {
    type: "Number",
    title: startCase(propName)
    // min: Number,
    // max: Number,
    // step: Number,
    // unit: String
  };
}
