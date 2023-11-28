import type { App } from 'vue';
import _IconCooperativeHandshake from './icon-cooperative-handshake.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCooperativeHandshake.name = getComponentsPrefix() + _IconCooperativeHandshake.name;

const IconCooperativeHandshake = Object.assign(_IconCooperativeHandshake, {
  install: (app: App) => {
    app.component(_IconCooperativeHandshake.name, _IconCooperativeHandshake);
  }
});

export default IconCooperativeHandshake;