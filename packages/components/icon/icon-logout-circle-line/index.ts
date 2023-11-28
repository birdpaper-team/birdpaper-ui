import type { App } from 'vue';
import _IconLogoutCircleLine from './icon-logout-circle-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLogoutCircleLine.name = getComponentsPrefix() + _IconLogoutCircleLine.name;

const IconLogoutCircleLine = Object.assign(_IconLogoutCircleLine, {
  install: (app: App) => {
    app.component(_IconLogoutCircleLine.name, _IconLogoutCircleLine);
  }
});

export default IconLogoutCircleLine;