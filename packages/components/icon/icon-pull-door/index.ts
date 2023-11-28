import type { App } from 'vue';
import _IconPullDoor from './icon-pull-door.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPullDoor.name = getComponentsPrefix() + _IconPullDoor.name;

const IconPullDoor = Object.assign(_IconPullDoor, {
  install: (app: App) => {
    app.component(_IconPullDoor.name, _IconPullDoor);
  }
});

export default IconPullDoor;