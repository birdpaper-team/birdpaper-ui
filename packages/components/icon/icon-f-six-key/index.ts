import type { App } from 'vue';
import _IconFSixKey from './icon-f-six-key.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFSixKey.name = getComponentsPrefix() + _IconFSixKey.name;

const IconFSixKey = Object.assign(_IconFSixKey, {
  install: (app: App) => {
    app.component(_IconFSixKey.name, _IconFSixKey);
  }
});

export default IconFSixKey;