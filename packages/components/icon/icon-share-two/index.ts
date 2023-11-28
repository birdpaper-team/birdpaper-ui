import type { App } from 'vue';
import _IconShareTwo from './icon-share-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShareTwo.name = getComponentsPrefix() + _IconShareTwo.name;

const IconShareTwo = Object.assign(_IconShareTwo, {
  install: (app: App) => {
    app.component(_IconShareTwo.name, _IconShareTwo);
  }
});

export default IconShareTwo;