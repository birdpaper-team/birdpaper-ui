import type { App } from 'vue';
import _IconFileTxtOne from './icon-file-txt-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileTxtOne.name = getComponentsPrefix() + _IconFileTxtOne.name;

const IconFileTxtOne = Object.assign(_IconFileTxtOne, {
  install: (app: App) => {
    app.component(_IconFileTxtOne.name, _IconFileTxtOne);
  }
});

export default IconFileTxtOne;