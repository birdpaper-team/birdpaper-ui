import type { App } from 'vue';
import _IconProjectorTwo from './icon-projector-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconProjectorTwo.name = getComponentsPrefix() + _IconProjectorTwo.name;

const IconProjectorTwo = Object.assign(_IconProjectorTwo, {
  install: (app: App) => {
    app.component(_IconProjectorTwo.name, _IconProjectorTwo);
  }
});

export default IconProjectorTwo;