import type { App } from 'vue';
import _IconFlutterFill from './icon-flutter-fill.vue';

const IconFlutterFill = Object.assign(_IconFlutterFill, {
  install: (app: App) => {
    app.component(_IconFlutterFill.name, _IconFlutterFill);
  }
});

export default IconFlutterFill;