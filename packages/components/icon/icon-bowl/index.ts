import type { App } from 'vue';
import _IconBowl from './icon-bowl.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBowl.name = getComponentsPrefix() + _IconBowl.name;

const IconBowl = Object.assign(_IconBowl, {
  install: (app: App) => {
    app.component(_IconBowl.name, _IconBowl);
  }
});

export default IconBowl;