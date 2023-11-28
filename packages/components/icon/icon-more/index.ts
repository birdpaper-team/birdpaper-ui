import type { App } from 'vue';
import _IconMore from './icon-more.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMore.name = getComponentsPrefix() + _IconMore.name;

const IconMore = Object.assign(_IconMore, {
  install: (app: App) => {
    app.component(_IconMore.name, _IconMore);
  }
});

export default IconMore;