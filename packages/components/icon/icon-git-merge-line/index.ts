import type { App } from 'vue';
import _IconGitMergeLine from './icon-git-merge-line.vue';

const IconGitMergeLine = Object.assign(_IconGitMergeLine, {
  install: (app: App) => {
    app.component(_IconGitMergeLine.name, _IconGitMergeLine);
  }
});

export default IconGitMergeLine;