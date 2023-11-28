import type { App } from 'vue';
import _IconLeftBranch from './icon-left-branch.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLeftBranch.name = getComponentsPrefix() + _IconLeftBranch.name;

const IconLeftBranch = Object.assign(_IconLeftBranch, {
  install: (app: App) => {
    app.component(_IconLeftBranch.name, _IconLeftBranch);
  }
});

export default IconLeftBranch;