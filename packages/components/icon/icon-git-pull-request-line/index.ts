import type { App } from 'vue';
import _IconGitPullRequestLine from './icon-git-pull-request-line.vue';

const IconGitPullRequestLine = Object.assign(_IconGitPullRequestLine, {
  install: (app: App) => {
    app.component(_IconGitPullRequestLine.name, _IconGitPullRequestLine);
  }
});

export default IconGitPullRequestLine;