import type { App } from 'vue';
import _IconLowerBranch from './icon-lower-branch.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLowerBranch.name = getComponentsPrefix() + _IconLowerBranch.name;

const IconLowerBranch = Object.assign(_IconLowerBranch, {
  install: (app: App) => {
    app.component(_IconLowerBranch.name, _IconLowerBranch);
  }
});

export default IconLowerBranch;