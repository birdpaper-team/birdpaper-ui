import type { App } from 'vue';
import _IconGithubOne from './icon-github-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGithubOne.name = getComponentsPrefix() + _IconGithubOne.name;

const IconGithubOne = Object.assign(_IconGithubOne, {
  install: (app: App) => {
    app.component(_IconGithubOne.name, _IconGithubOne);
  }
});

export default IconGithubOne;