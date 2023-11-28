import type { App } from 'vue';
import _IconBarbecue from './icon-barbecue.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBarbecue.name = getComponentsPrefix() + _IconBarbecue.name;

const IconBarbecue = Object.assign(_IconBarbecue, {
  install: (app: App) => {
    app.component(_IconBarbecue.name, _IconBarbecue);
  }
});

export default IconBarbecue;