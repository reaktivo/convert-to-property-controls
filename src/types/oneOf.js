import mapObject from "../util/mapObject";
import startCase from "lodash.startcase";

const isValidEnumValue = value => ["number", "string"].includes(typeof value);

export default function oneOf(prop, propName) {
  if (prop.definition.every(isValidEnumValue)) {
    return {
      type: "Enum",
      options: prop.definition,
      optionTitles: prop.definition.map(title => startCase(title)),
      title: startCase(propName)
    };
  }
}
