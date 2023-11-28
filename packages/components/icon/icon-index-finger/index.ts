import type { App } from 'vue';
import _IconIndexFinger from './icon-index-finger.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIndexFinger.name = getComponentsPrefix() + _IconIndexFinger.name;

const IconIndexFinger = Object.assign(_IconIndexFinger, {
  install: (app: App) => {
    app.component(_IconIndexFinger.name, _IconIndexFinger);
  }
});

export default IconIndexFinger;