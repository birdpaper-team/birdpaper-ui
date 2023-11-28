import type { App } from 'vue';
import _IconChildWithPacifier from './icon-child-with-pacifier.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChildWithPacifier.name = getComponentsPrefix() + _IconChildWithPacifier.name;

const IconChildWithPacifier = Object.assign(_IconChildWithPacifier, {
  install: (app: App) => {
    app.component(_IconChildWithPacifier.name, _IconChildWithPacifier);
  }
});

export default IconChildWithPacifier;