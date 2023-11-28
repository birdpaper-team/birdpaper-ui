import type { App } from 'vue';
import _IconBranchTwo from './icon-branch-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBranchTwo.name = getComponentsPrefix() + _IconBranchTwo.name;

const IconBranchTwo = Object.assign(_IconBranchTwo, {
  install: (app: App) => {
    app.component(_IconBranchTwo.name, _IconBranchTwo);
  }
});

export default IconBranchTwo;