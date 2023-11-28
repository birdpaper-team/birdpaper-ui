import type { App } from 'vue';
import _IconFileText from './icon-file-text.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileText.name = getComponentsPrefix() + _IconFileText.name;

const IconFileText = Object.assign(_IconFileText, {
  install: (app: App) => {
    app.component(_IconFileText.name, _IconFileText);
  }
});

export default IconFileText;