import type { App } from 'vue';
import _IconAddText from './icon-add-text.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAddText.name = getComponentsPrefix() + _IconAddText.name;

const IconAddText = Object.assign(_IconAddText, {
  install: (app: App) => {
    app.component(_IconAddText.name, _IconAddText);
  }
});

export default IconAddText;