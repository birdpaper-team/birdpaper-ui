import type { App } from 'vue';
import _IconSkate from './icon-skate.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSkate.name = getComponentsPrefix() + _IconSkate.name;

const IconSkate = Object.assign(_IconSkate, {
  install: (app: App) => {
    app.component(_IconSkate.name, _IconSkate);
  }
});

export default IconSkate;