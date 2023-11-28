import type { App } from 'vue';
import _IconDropbox from './icon-dropbox.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDropbox.name = getComponentsPrefix() + _IconDropbox.name;

const IconDropbox = Object.assign(_IconDropbox, {
  install: (app: App) => {
    app.component(_IconDropbox.name, _IconDropbox);
  }
});

export default IconDropbox;