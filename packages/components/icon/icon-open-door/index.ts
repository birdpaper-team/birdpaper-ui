import type { App } from 'vue';
import _IconOpenDoor from './icon-open-door.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOpenDoor.name = getComponentsPrefix() + _IconOpenDoor.name;

const IconOpenDoor = Object.assign(_IconOpenDoor, {
  install: (app: App) => {
    app.component(_IconOpenDoor.name, _IconOpenDoor);
  }
});

export default IconOpenDoor;