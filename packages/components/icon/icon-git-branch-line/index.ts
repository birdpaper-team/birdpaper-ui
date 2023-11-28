import type { App } from 'vue';
import _IconGitBranchLine from './icon-git-branch-line.vue';

const IconGitBranchLine = Object.assign(_IconGitBranchLine, {
  install: (app: App) => {
    app.component(_IconGitBranchLine.name, _IconGitBranchLine);
  }
});

export default IconGitBranchLine;