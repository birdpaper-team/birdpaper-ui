import type { App } from 'vue';
import _IconHeading from './icon-heading.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHeading.name = getComponentsPrefix() + _IconHeading.name;

const IconHeading = Object.assign(_IconHeading, {
  install: (app: App) => {
    app.component(_IconHeading.name, _IconHeading);
  }
});

export default IconHeading;