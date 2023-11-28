import type { App } from 'vue';
import _IconFileDateOne from './icon-file-date-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileDateOne.name = getComponentsPrefix() + _IconFileDateOne.name;

const IconFileDateOne = Object.assign(_IconFileDateOne, {
  install: (app: App) => {
    app.component(_IconFileDateOne.name, _IconFileDateOne);
  }
});

export default IconFileDateOne;