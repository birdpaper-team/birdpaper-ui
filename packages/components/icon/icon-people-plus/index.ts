import type { App } from 'vue';
import _IconPeoplePlus from './icon-people-plus.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPeoplePlus.name = getComponentsPrefix() + _IconPeoplePlus.name;

const IconPeoplePlus = Object.assign(_IconPeoplePlus, {
  install: (app: App) => {
    app.component(_IconPeoplePlus.name, _IconPeoplePlus);
  }
});

export default IconPeoplePlus;