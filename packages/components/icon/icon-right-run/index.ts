import type { App } from 'vue';
import _IconRightRun from './icon-right-run.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRightRun.name = getComponentsPrefix() + _IconRightRun.name;

const IconRightRun = Object.assign(_IconRightRun, {
  install: (app: App) => {
    app.component(_IconRightRun.name, _IconRightRun);
  }
});

export default IconRightRun;