import type { App } from 'vue';
import _IconScorpio from './icon-scorpio.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconScorpio.name = getComponentsPrefix() + _IconScorpio.name;

const IconScorpio = Object.assign(_IconScorpio, {
  install: (app: App) => {
    app.component(_IconScorpio.name, _IconScorpio);
  }
});

export default IconScorpio;