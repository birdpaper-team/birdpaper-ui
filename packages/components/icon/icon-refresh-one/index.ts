import type { App } from 'vue';
import _IconRefreshOne from './icon-refresh-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRefreshOne.name = getComponentsPrefix() + _IconRefreshOne.name;

const IconRefreshOne = Object.assign(_IconRefreshOne, {
  install: (app: App) => {
    app.component(_IconRefreshOne.name, _IconRefreshOne);
  }
});

export default IconRefreshOne;