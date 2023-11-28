import type { App } from 'vue';
import _IconBroadcast from './icon-broadcast.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBroadcast.name = getComponentsPrefix() + _IconBroadcast.name;

const IconBroadcast = Object.assign(_IconBroadcast, {
  install: (app: App) => {
    app.component(_IconBroadcast.name, _IconBroadcast);
  }
});

export default IconBroadcast;