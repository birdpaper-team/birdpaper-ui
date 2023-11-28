import type { App } from 'vue';
import _IconBoyStroller from './icon-boy-stroller.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBoyStroller.name = getComponentsPrefix() + _IconBoyStroller.name;

const IconBoyStroller = Object.assign(_IconBoyStroller, {
  install: (app: App) => {
    app.component(_IconBoyStroller.name, _IconBoyStroller);
  }
});

export default IconBoyStroller;