import type { App } from 'vue';
import _IconGameHandle from './icon-game-handle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGameHandle.name = getComponentsPrefix() + _IconGameHandle.name;

const IconGameHandle = Object.assign(_IconGameHandle, {
  install: (app: App) => {
    app.component(_IconGameHandle.name, _IconGameHandle);
  }
});

export default IconGameHandle;