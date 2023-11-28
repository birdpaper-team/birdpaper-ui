import type { App } from 'vue';
import _IconEqualizerLine from './icon-equalizer-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEqualizerLine.name = getComponentsPrefix() + _IconEqualizerLine.name;

const IconEqualizerLine = Object.assign(_IconEqualizerLine, {
  install: (app: App) => {
    app.component(_IconEqualizerLine.name, _IconEqualizerLine);
  }
});

export default IconEqualizerLine;