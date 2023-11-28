import type { App } from 'vue';
import _IconGitMergeLine from './icon-git-merge-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGitMergeLine.name = getComponentsPrefix() + _IconGitMergeLine.name;

const IconGitMergeLine = Object.assign(_IconGitMergeLine, {
  install: (app: App) => {
    app.component(_IconGitMergeLine.name, _IconGitMergeLine);
  }
});

export default IconGitMergeLine;