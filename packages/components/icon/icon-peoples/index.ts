import type { App } from 'vue';
import _IconPeoples from './icon-peoples.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPeoples.name = getComponentsPrefix() + _IconPeoples.name;

const IconPeoples = Object.assign(_IconPeoples, {
  install: (app: App) => {
    app.component(_IconPeoples.name, _IconPeoples);
  }
});

export default IconPeoples;