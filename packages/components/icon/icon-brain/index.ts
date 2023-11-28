import type { App } from 'vue';
import _IconBrain from './icon-brain.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBrain.name = getComponentsPrefix() + _IconBrain.name;

const IconBrain = Object.assign(_IconBrain, {
  install: (app: App) => {
    app.component(_IconBrain.name, _IconBrain);
  }
});

export default IconBrain;