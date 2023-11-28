import type { App } from 'vue';
import _IconSignal from './icon-signal.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSignal.name = getComponentsPrefix() + _IconSignal.name;

const IconSignal = Object.assign(_IconSignal, {
  install: (app: App) => {
    app.component(_IconSignal.name, _IconSignal);
  }
});

export default IconSignal;