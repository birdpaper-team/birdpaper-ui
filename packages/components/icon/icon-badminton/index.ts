import type { App } from 'vue';
import _IconBadminton from './icon-badminton.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBadminton.name = getComponentsPrefix() + _IconBadminton.name;

const IconBadminton = Object.assign(_IconBadminton, {
  install: (app: App) => {
    app.component(_IconBadminton.name, _IconBadminton);
  }
});

export default IconBadminton;