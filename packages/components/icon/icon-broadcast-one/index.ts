import type { App } from 'vue';
import _IconBroadcastOne from './icon-broadcast-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBroadcastOne.name = getComponentsPrefix() + _IconBroadcastOne.name;

const IconBroadcastOne = Object.assign(_IconBroadcastOne, {
  install: (app: App) => {
    app.component(_IconBroadcastOne.name, _IconBroadcastOne);
  }
});

export default IconBroadcastOne;