import type { App } from 'vue';
import _IconGithubLine from './icon-github-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGithubLine.name = getComponentsPrefix() + _IconGithubLine.name;

const IconGithubLine = Object.assign(_IconGithubLine, {
  install: (app: App) => {
    app.component(_IconGithubLine.name, _IconGithubLine);
  }
});

export default IconGithubLine;