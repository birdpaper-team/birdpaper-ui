import type { App } from 'vue';
import _IconLayoutTwo from './icon-layout-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLayoutTwo.name = getComponentsPrefix() + _IconLayoutTwo.name;

const IconLayoutTwo = Object.assign(_IconLayoutTwo, {
  install: (app: App) => {
    app.component(_IconLayoutTwo.name, _IconLayoutTwo);
  }
});

export default IconLayoutTwo;