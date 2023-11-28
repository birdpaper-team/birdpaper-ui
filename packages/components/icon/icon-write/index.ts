import type { App } from 'vue';
import _IconWrite from './icon-write.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWrite.name = getComponentsPrefix() + _IconWrite.name;

const IconWrite = Object.assign(_IconWrite, {
  install: (app: App) => {
    app.component(_IconWrite.name, _IconWrite);
  }
});

export default IconWrite;