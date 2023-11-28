import type { App } from 'vue';
import _IconAppleOne from './icon-apple-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAppleOne.name = getComponentsPrefix() + _IconAppleOne.name;

const IconAppleOne = Object.assign(_IconAppleOne, {
  install: (app: App) => {
    app.component(_IconAppleOne.name, _IconAppleOne);
  }
});

export default IconAppleOne;