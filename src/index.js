import mapObject from "./util/mapObject";
import startCase from "lodash.startcase";
import "@reaktivo/spy-on-prop-types/register";

import * as types from "./types";

export default function convertToPropertyControls(propTypes) {
  return mapObject(propTypes, (checkerFn, propName) => {
    if (checkerFn && types[checkerFn.type]) {
      return types[checkerFn.type](checkerFn, propName);
    }
  });
}
