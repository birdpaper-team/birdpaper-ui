import type { App } from 'vue';
import _IconHelpcenter from './icon-helpcenter.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHelpcenter.name = getComponentsPrefix() + _IconHelpcenter.name;

const IconHelpcenter = Object.assign(_IconHelpcenter, {
  install: (app: App) => {
    app.component(_IconHelpcenter.name, _IconHelpcenter);
  }
});

export default IconHelpcenter;