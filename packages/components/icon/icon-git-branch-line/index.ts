import type { App } from 'vue';
import _IconGitBranchLine from './icon-git-branch-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGitBranchLine.name = getComponentsPrefix() + _IconGitBranchLine.name;

const IconGitBranchLine = Object.assign(_IconGitBranchLine, {
  install: (app: App) => {
    app.component(_IconGitBranchLine.name, _IconGitBranchLine);
  }
});

export default IconGitBranchLine;