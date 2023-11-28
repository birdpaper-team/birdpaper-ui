import type { App } from 'vue';
import _IconPiano from './icon-piano.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPiano.name = getComponentsPrefix() + _IconPiano.name;

const IconPiano = Object.assign(_IconPiano, {
  install: (app: App) => {
    app.component(_IconPiano.name, _IconPiano);
  }
});

export default IconPiano;