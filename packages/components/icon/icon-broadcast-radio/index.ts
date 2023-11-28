import type { App } from 'vue';
import _IconBroadcastRadio from './icon-broadcast-radio.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBroadcastRadio.name = getComponentsPrefix() + _IconBroadcastRadio.name;

const IconBroadcastRadio = Object.assign(_IconBroadcastRadio, {
  install: (app: App) => {
    app.component(_IconBroadcastRadio.name, _IconBroadcastRadio);
  }
});

export default IconBroadcastRadio;