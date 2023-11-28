import type { App } from 'vue';
import _IconLinkBreak from './icon-link-break.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLinkBreak.name = getComponentsPrefix() + _IconLinkBreak.name;

const IconLinkBreak = Object.assign(_IconLinkBreak, {
  install: (app: App) => {
    app.component(_IconLinkBreak.name, _IconLinkBreak);
  }
});

export default IconLinkBreak;