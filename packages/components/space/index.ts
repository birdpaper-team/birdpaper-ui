/**
 * @ Author: Sam
 * @ Create Time: 2023-03-09 06:16:14
 * @ Modified by: Sam
 * @ Modified time: 2023-03-09 19:21:21
 * @ Description:
 */

import { App } from "vue";
import _space from "./src/space";

_space.name = `bp-${_space.name}`;

const Space = Object.assign(_space, {
  install: (app: App) => {
    app.component(_space.name, _space);
  },
});

export type SpaceInstance = InstanceType<typeof _space>;
export default Space;
