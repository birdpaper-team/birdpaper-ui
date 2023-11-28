import type { App } from 'vue';
import _IconListSettingsLine from './icon-list-settings-line.vue';

const IconListSettingsLine = Object.assign(_IconListSettingsLine, {
  install: (app: App) => {
    app.component(_IconListSettingsLine.name, _IconListSettingsLine);
  }
});

export default IconListSettingsLine;