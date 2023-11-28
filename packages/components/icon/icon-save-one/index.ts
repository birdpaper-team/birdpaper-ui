import type { App } from 'vue';
import _IconSaveOne from './icon-save-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSaveOne.name = getComponentsPrefix() + _IconSaveOne.name;

const IconSaveOne = Object.assign(_IconSaveOne, {
  install: (app: App) => {
    app.component(_IconSaveOne.name, _IconSaveOne);
  }
});

export default IconSaveOne;