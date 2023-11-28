import type { App } from 'vue';
import _IconSplitBranch from './icon-split-branch.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSplitBranch.name = getComponentsPrefix() + _IconSplitBranch.name;

const IconSplitBranch = Object.assign(_IconSplitBranch, {
  install: (app: App) => {
    app.component(_IconSplitBranch.name, _IconSplitBranch);
  }
});

export default IconSplitBranch;