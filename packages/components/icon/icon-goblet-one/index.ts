import type { App } from 'vue';
import _IconGobletOne from './icon-goblet-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGobletOne.name = getComponentsPrefix() + _IconGobletOne.name;

const IconGobletOne = Object.assign(_IconGobletOne, {
  install: (app: App) => {
    app.component(_IconGobletOne.name, _IconGobletOne);
  }
});

export default IconGobletOne;