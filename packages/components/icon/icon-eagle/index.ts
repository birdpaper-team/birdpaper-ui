import type { App } from 'vue';
import _IconEagle from './icon-eagle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEagle.name = getComponentsPrefix() + _IconEagle.name;

const IconEagle = Object.assign(_IconEagle, {
  install: (app: App) => {
    app.component(_IconEagle.name, _IconEagle);
  }
});

export default IconEagle;