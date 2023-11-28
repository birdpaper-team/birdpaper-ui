import type { App } from 'vue';
import _IconOutgoing from './icon-outgoing.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOutgoing.name = getComponentsPrefix() + _IconOutgoing.name;

const IconOutgoing = Object.assign(_IconOutgoing, {
  install: (app: App) => {
    app.component(_IconOutgoing.name, _IconOutgoing);
  }
});

export default IconOutgoing;