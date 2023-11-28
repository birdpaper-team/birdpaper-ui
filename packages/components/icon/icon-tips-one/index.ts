import type { App } from 'vue';
import _IconTipsOne from './icon-tips-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTipsOne.name = getComponentsPrefix() + _IconTipsOne.name;

const IconTipsOne = Object.assign(_IconTipsOne, {
  install: (app: App) => {
    app.component(_IconTipsOne.name, _IconTipsOne);
  }
});

export default IconTipsOne;