import type { App } from 'vue';
import _IconFriendsCircle from './icon-friends-circle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFriendsCircle.name = getComponentsPrefix() + _IconFriendsCircle.name;

const IconFriendsCircle = Object.assign(_IconFriendsCircle, {
  install: (app: App) => {
    app.component(_IconFriendsCircle.name, _IconFriendsCircle);
  }
});

export default IconFriendsCircle;