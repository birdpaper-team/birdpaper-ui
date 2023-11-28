import type { App } from 'vue';
import _IconBugLine from './icon-bug-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBugLine.name = getComponentsPrefix() + _IconBugLine.name;

const IconBugLine = Object.assign(_IconBugLine, {
  install: (app: App) => {
    app.component(_IconBugLine.name, _IconBugLine);
  }
});

export default IconBugLine;