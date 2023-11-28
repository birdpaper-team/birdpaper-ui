import type { App } from 'vue';
import _IconFileTipsOne from './icon-file-tips-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileTipsOne.name = getComponentsPrefix() + _IconFileTipsOne.name;

const IconFileTipsOne = Object.assign(_IconFileTipsOne, {
  install: (app: App) => {
    app.component(_IconFileTipsOne.name, _IconFileTipsOne);
  }
});

export default IconFileTipsOne;