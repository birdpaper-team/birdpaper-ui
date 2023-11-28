import type { App } from 'vue';
import _IconFlutterFill from './icon-flutter-fill.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFlutterFill.name = getComponentsPrefix() + _IconFlutterFill.name;

const IconFlutterFill = Object.assign(_IconFlutterFill, {
  install: (app: App) => {
    app.component(_IconFlutterFill.name, _IconFlutterFill);
  }
});

export default IconFlutterFill;