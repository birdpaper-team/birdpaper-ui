import type { App } from 'vue';
import _IconLeftAndRightBranch from './icon-left-and-right-branch.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLeftAndRightBranch.name = getComponentsPrefix() + _IconLeftAndRightBranch.name;

const IconLeftAndRightBranch = Object.assign(_IconLeftAndRightBranch, {
  install: (app: App) => {
    app.component(_IconLeftAndRightBranch.name, _IconLeftAndRightBranch);
  }
});

export default IconLeftAndRightBranch;