import type { App } from 'vue';
import _IconGeneralBranch from './icon-general-branch.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGeneralBranch.name = getComponentsPrefix() + _IconGeneralBranch.name;

const IconGeneralBranch = Object.assign(_IconGeneralBranch, {
  install: (app: App) => {
    app.component(_IconGeneralBranch.name, _IconGeneralBranch);
  }
});

export default IconGeneralBranch;