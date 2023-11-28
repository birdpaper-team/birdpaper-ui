import type { App } from 'vue';
import _IconLevelSixTitle from './icon-level-six-title.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLevelSixTitle.name = getComponentsPrefix() + _IconLevelSixTitle.name;

const IconLevelSixTitle = Object.assign(_IconLevelSixTitle, {
  install: (app: App) => {
    app.component(_IconLevelSixTitle.name, _IconLevelSixTitle);
  }
});

export default IconLevelSixTitle;