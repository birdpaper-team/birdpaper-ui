import type { App } from 'vue';
import _IconGitlab from './icon-gitlab.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGitlab.name = getComponentsPrefix() + _IconGitlab.name;

const IconGitlab = Object.assign(_IconGitlab, {
  install: (app: App) => {
    app.component(_IconGitlab.name, _IconGitlab);
  }
});

export default IconGitlab;