import type { App } from 'vue';
import _IconTelegram from './icon-telegram.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTelegram.name = getComponentsPrefix() + _IconTelegram.name;

const IconTelegram = Object.assign(_IconTelegram, {
  install: (app: App) => {
    app.component(_IconTelegram.name, _IconTelegram);
  }
});

export default IconTelegram;