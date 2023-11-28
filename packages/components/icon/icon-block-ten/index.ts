import type { App } from 'vue';
import _IconBlockTen from './icon-block-ten.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBlockTen.name = getComponentsPrefix() + _IconBlockTen.name;

const IconBlockTen = Object.assign(_IconBlockTen, {
  install: (app: App) => {
    app.component(_IconBlockTen.name, _IconBlockTen);
  }
});

export default IconBlockTen;