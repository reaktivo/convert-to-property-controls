export default function bool(prop, propName) {
  return {
    type: "Boolean",
    disabledTitle: "False", // do some heuristics to get better names
    enabledTitle: "True"
  };
}
