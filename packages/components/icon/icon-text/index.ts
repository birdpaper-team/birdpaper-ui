import type { App } from 'vue';
import _IconText from './icon-text.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconText.name = getComponentsPrefix() + _IconText.name;

const IconText = Object.assign(_IconText, {
  install: (app: App) => {
    app.component(_IconText.name, _IconText);
  }
});

export default IconText;