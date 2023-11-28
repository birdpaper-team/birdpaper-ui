import type { App } from 'vue';
import _IconMiddleFinger from './icon-middle-finger.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMiddleFinger.name = getComponentsPrefix() + _IconMiddleFinger.name;

const IconMiddleFinger = Object.assign(_IconMiddleFinger, {
  install: (app: App) => {
    app.component(_IconMiddleFinger.name, _IconMiddleFinger);
  }
});

export default IconMiddleFinger;