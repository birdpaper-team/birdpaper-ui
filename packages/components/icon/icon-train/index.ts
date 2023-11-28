import type { App } from 'vue';
import _IconTrain from './icon-train.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTrain.name = getComponentsPrefix() + _IconTrain.name;

const IconTrain = Object.assign(_IconTrain, {
  install: (app: App) => {
    app.component(_IconTrain.name, _IconTrain);
  }
});

export default IconTrain;