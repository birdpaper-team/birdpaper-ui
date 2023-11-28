import type { App } from 'vue';
import _IconRightBranch from './icon-right-branch.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRightBranch.name = getComponentsPrefix() + _IconRightBranch.name;

const IconRightBranch = Object.assign(_IconRightBranch, {
  install: (app: App) => {
    app.component(_IconRightBranch.name, _IconRightBranch);
  }
});

export default IconRightBranch;