import type { App } from 'vue';
import _IconPushDoor from './icon-push-door.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPushDoor.name = getComponentsPrefix() + _IconPushDoor.name;

const IconPushDoor = Object.assign(_IconPushDoor, {
  install: (app: App) => {
    app.component(_IconPushDoor.name, _IconPushDoor);
  }
});

export default IconPushDoor;