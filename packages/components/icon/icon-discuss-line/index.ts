import type { App } from 'vue';
import _IconDiscussLine from './icon-discuss-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDiscussLine.name = getComponentsPrefix() + _IconDiscussLine.name;

const IconDiscussLine = Object.assign(_IconDiscussLine, {
  install: (app: App) => {
    app.component(_IconDiscussLine.name, _IconDiscussLine);
  }
});

export default IconDiscussLine;