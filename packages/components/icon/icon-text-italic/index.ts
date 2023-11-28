import type { App } from 'vue';
import _IconTextItalic from './icon-text-italic.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTextItalic.name = getComponentsPrefix() + _IconTextItalic.name;

const IconTextItalic = Object.assign(_IconTextItalic, {
  install: (app: App) => {
    app.component(_IconTextItalic.name, _IconTextItalic);
  }
});

export default IconTextItalic;