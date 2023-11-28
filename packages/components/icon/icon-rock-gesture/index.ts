import type { App } from 'vue';
import _IconRockGesture from './icon-rock-gesture.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRockGesture.name = getComponentsPrefix() + _IconRockGesture.name;

const IconRockGesture = Object.assign(_IconRockGesture, {
  install: (app: App) => {
    app.component(_IconRockGesture.name, _IconRockGesture);
  }
});

export default IconRockGesture;