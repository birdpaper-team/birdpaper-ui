import type { App } from 'vue';
import _IconAndroidLine from './icon-android-line.vue';

const IconAndroidLine = Object.assign(_IconAndroidLine, {
  install: (app: App) => {
    app.component(_IconAndroidLine.name, _IconAndroidLine);
  }
});

export default IconAndroidLine;