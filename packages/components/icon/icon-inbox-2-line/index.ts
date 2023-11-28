import type { App } from 'vue';
import _IconInbox2Line from './icon-inbox-2-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInbox2Line.name = getComponentsPrefix() + _IconInbox2Line.name;

const IconInbox2Line = Object.assign(_IconInbox2Line, {
  install: (app: App) => {
    app.component(_IconInbox2Line.name, _IconInbox2Line);
  }
});

export default IconInbox2Line;