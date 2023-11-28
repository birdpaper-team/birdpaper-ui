import type { App } from 'vue';
import _IconClick from './icon-click.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconClick.name = getComponentsPrefix() + _IconClick.name;

const IconClick = Object.assign(_IconClick, {
  install: (app: App) => {
    app.component(_IconClick.name, _IconClick);
  }
});

export default IconClick;