import type { App } from 'vue';
import _IconMayuraGesture from './icon-mayura-gesture.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMayuraGesture.name = getComponentsPrefix() + _IconMayuraGesture.name;

const IconMayuraGesture = Object.assign(_IconMayuraGesture, {
  install: (app: App) => {
    app.component(_IconMayuraGesture.name, _IconMayuraGesture);
  }
});

export default IconMayuraGesture;