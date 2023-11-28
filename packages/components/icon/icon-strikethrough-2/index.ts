import type { App } from 'vue';
import _IconStrikethrough2 from './icon-strikethrough-2.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconStrikethrough2.name = getComponentsPrefix() + _IconStrikethrough2.name;

const IconStrikethrough2 = Object.assign(_IconStrikethrough2, {
  install: (app: App) => {
    app.component(_IconStrikethrough2.name, _IconStrikethrough2);
  }
});

export default IconStrikethrough2;