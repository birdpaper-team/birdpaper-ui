import type { App } from 'vue';
import _IconBabySling from './icon-baby-sling.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBabySling.name = getComponentsPrefix() + _IconBabySling.name;

const IconBabySling = Object.assign(_IconBabySling, {
  install: (app: App) => {
    app.component(_IconBabySling.name, _IconBabySling);
  }
});

export default IconBabySling;