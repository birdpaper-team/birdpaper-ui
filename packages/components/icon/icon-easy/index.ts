import type { App } from 'vue';
import _IconEasy from './icon-easy.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEasy.name = getComponentsPrefix() + _IconEasy.name;

const IconEasy = Object.assign(_IconEasy, {
  install: (app: App) => {
    app.component(_IconEasy.name, _IconEasy);
  }
});

export default IconEasy;