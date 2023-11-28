import type { App } from 'vue';
import _IconLevelEightTitle from './icon-level-eight-title.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLevelEightTitle.name = getComponentsPrefix() + _IconLevelEightTitle.name;

const IconLevelEightTitle = Object.assign(_IconLevelEightTitle, {
  install: (app: App) => {
    app.component(_IconLevelEightTitle.name, _IconLevelEightTitle);
  }
});

export default IconLevelEightTitle;