import type { App } from 'vue';
import _IconShaverOne from './icon-shaver-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShaverOne.name = getComponentsPrefix() + _IconShaverOne.name;

const IconShaverOne = Object.assign(_IconShaverOne, {
  install: (app: App) => {
    app.component(_IconShaverOne.name, _IconShaverOne);
  }
});

export default IconShaverOne;