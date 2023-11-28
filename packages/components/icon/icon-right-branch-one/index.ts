import type { App } from 'vue';
import _IconRightBranchOne from './icon-right-branch-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRightBranchOne.name = getComponentsPrefix() + _IconRightBranchOne.name;

const IconRightBranchOne = Object.assign(_IconRightBranchOne, {
  install: (app: App) => {
    app.component(_IconRightBranchOne.name, _IconRightBranchOne);
  }
});

export default IconRightBranchOne;