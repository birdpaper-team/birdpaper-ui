import type { App } from 'vue';
import _IconFileHash from './icon-file-hash.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileHash.name = getComponentsPrefix() + _IconFileHash.name;

const IconFileHash = Object.assign(_IconFileHash, {
  install: (app: App) => {
    app.component(_IconFileHash.name, _IconFileHash);
  }
});

export default IconFileHash;