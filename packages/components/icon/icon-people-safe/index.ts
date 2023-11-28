import type { App } from 'vue';
import _IconPeopleSafe from './icon-people-safe.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPeopleSafe.name = getComponentsPrefix() + _IconPeopleSafe.name;

const IconPeopleSafe = Object.assign(_IconPeopleSafe, {
  install: (app: App) => {
    app.component(_IconPeopleSafe.name, _IconPeopleSafe);
  }
});

export default IconPeopleSafe;