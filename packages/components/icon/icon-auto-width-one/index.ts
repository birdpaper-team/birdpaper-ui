import type { App } from 'vue';
import _IconAutoWidthOne from './icon-auto-width-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAutoWidthOne.name = getComponentsPrefix() + _IconAutoWidthOne.name;

const IconAutoWidthOne = Object.assign(_IconAutoWidthOne, {
  install: (app: App) => {
    app.component(_IconAutoWidthOne.name, _IconAutoWidthOne);
  }
});

export default IconAutoWidthOne;