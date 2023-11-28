import type { App } from 'vue';
import _IconBread from './icon-bread.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBread.name = getComponentsPrefix() + _IconBread.name;

const IconBread = Object.assign(_IconBread, {
  install: (app: App) => {
    app.component(_IconBread.name, _IconBread);
  }
});

export default IconBread;