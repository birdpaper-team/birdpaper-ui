import type { App } from 'vue';
import _IconStrikethrough from './icon-strikethrough.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconStrikethrough.name = getComponentsPrefix() + _IconStrikethrough.name;

const IconStrikethrough = Object.assign(_IconStrikethrough, {
  install: (app: App) => {
    app.component(_IconStrikethrough.name, _IconStrikethrough);
  }
});

export default IconStrikethrough;