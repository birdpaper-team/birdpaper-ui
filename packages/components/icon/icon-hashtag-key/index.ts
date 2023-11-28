import type { App } from 'vue';
import _IconHashtagKey from './icon-hashtag-key.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHashtagKey.name = getComponentsPrefix() + _IconHashtagKey.name;

const IconHashtagKey = Object.assign(_IconHashtagKey, {
  install: (app: App) => {
    app.component(_IconHashtagKey.name, _IconHashtagKey);
  }
});

export default IconHashtagKey;