import type { App } from 'vue';
import _IconInformationLine from './icon-information-line.vue';

const IconInformationLine = Object.assign(_IconInformationLine, {
  install: (app: App) => {
    app.component(_IconInformationLine.name, _IconInformationLine);
  }
});

export default IconInformationLine;