import type { App } from 'vue';
import _IconDoorHandle from './icon-door-handle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDoorHandle.name = getComponentsPrefix() + _IconDoorHandle.name;

const IconDoorHandle = Object.assign(_IconDoorHandle, {
  install: (app: App) => {
    app.component(_IconDoorHandle.name, _IconDoorHandle);
  }
});

export default IconDoorHandle;