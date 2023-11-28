import type { App } from 'vue';
import _IconEqualizerLine from './icon-equalizer-line.vue';

const IconEqualizerLine = Object.assign(_IconEqualizerLine, {
  install: (app: App) => {
    app.component(_IconEqualizerLine.name, _IconEqualizerLine);
  }
});

export default IconEqualizerLine;